
export class AuthService {
    loggedIn: boolean = false;

    isAuthenticated() {
        console.log('loggedIn :'+this.loggedIn);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
                console.log("this.loggedIn:"+this.loggedIn);
            }, 800);
        });
        return promise;
    }

    logIn() {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }
}