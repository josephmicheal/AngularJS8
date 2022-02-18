import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject, BehaviorSubject } from "rxjs";
import { User } from "./User";
import { Router } from "@angular/router";



interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered:boolean
}

@Injectable({providedIn:'root'})
export class AuthenticationService{
    constructor(private http:HttpClient, private router:Router){}

    user = new BehaviorSubject<User>(null);
    autoLogoutExipiryTimer:any;

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBg_zTk_GP2DIQsb4gUrK1FH_StC2-4BgI",{
            email:email,
            password:password,
            returnSecureToken:true
         })
         .pipe(catchError(this.handleError));
    }

    signIn(email:string,password:string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBg_zTk_GP2DIQsb4gUrK1FH_StC2-4BgI",{
            email:email,
            password:password,
            returnSecureToken:true
         }).pipe(catchError(this.handleError),
         tap(resData => {
             //+resData.expiresIn convert string to number
             this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            }));
      }

      logOut(){
          this.user.next(null);
          this.router.navigate(['./auth']);
          localStorage.removeItem('userData');
          if(this.autoLogoutExipiryTimer){
            clearTimeout(this.autoLogoutExipiryTimer);
          }
          this.autoLogoutExipiryTimer = null;
      }

      autoLogout(expirationDate:number){
        this.autoLogoutExipiryTimer = setTimeout(()=>{
            this.logOut();
        },2000);
      }

    private handleError(errorRes){
            let errorMessage ="An unknow error occured!";

            if(!errorRes.error || !errorRes.error.error){
                return  throwError(errorMessage);
            }

            switch(errorRes.error.error.message){
                case('EMAIL_EXISTS'):
                   errorMessage = "This email already exits";
                   break;
                case('EMAIL_NOT_FOUND'):
                   errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted";
                   break;
                case('INVALID_PASSWORD'):
                   errorMessage = "The password is invalid or the user does not have a password";
                   break;
            }

            return throwError(errorMessage);        
      }

      // Convert Response to User Object
    handleAuthentication(email:string,localId:string,idToken:string,expiresIn:number){
      
        // convert seconds to milli seconds to get expiryDate
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

        const newUser = new User(email,localId,idToken,expirationDate);

        this.user.next(newUser);

        localStorage.setItem('userData',JSON.stringify(newUser));

        this.autoLogout(expiresIn * 1000);
    }

    autoLogin(){
        const userData:{ email:string,
        id:string,
        _token:string,
        _tokenExpirationDate:string} = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
}