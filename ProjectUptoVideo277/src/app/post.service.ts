import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class PostService{
    errorSubject = new Subject<string>();
    constructor(private http: HttpClient) { }

    createPost(title:string,content:string){
        const postData = {'title':title,'content':content};
        return this.http
        .post<{name:string}>("https://first-http-project-88d08.firebaseio.com/posts.json", postData,
        { observe:'response'}
        ).subscribe(responseData => {
            console.log(responseData);
          },error => {
            this.errorSubject.next(error.message);
          });     
    }

    fetchPosts(){
        let httpParams = new HttpParams();
        httpParams = httpParams.append('key1','key1-value');
        httpParams = httpParams.append('key2','key2-value');

        return this.http
        .get<{[key:string]:Post}>("https://first-http-project-88d08.firebaseio.com/posts.json",
        {
            headers : new HttpHeaders({"Custom-Header":"I'm the way"}),
            params : httpParams
        })
        .pipe(
          map(responseData => {
              console.log(responseData);
            const postsArray = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key],'id':key});
              }
            }
            return postsArray;
        }),catchError(error => {
            // to send error details to some backend analytics server
            return throwError(error);
          }));
    }   

    onClearPosts(){
        return this.http.delete("https://first-http-project-88d08.firebaseio.com/posts.json",{
            observe:'events'
        }).pipe(tap(event =>{
            if(event.type === HttpEventType.Sent){
                console.log("Just request is sent")
                console.log(event);
            }
            if(event.type === HttpEventType.Response){
                console.log("Just response is received")
                console.log(event.body);
            }
        }));
    }
}