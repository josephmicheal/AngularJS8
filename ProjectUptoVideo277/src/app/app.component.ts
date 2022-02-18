import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  errorSubscription: Subscription;

  constructor(private service:PostService) { }

  ngOnInit() {
    this.onFetchPosts();    
    this.errorSubscription = this.service.errorSubject.subscribe(responseErr => {
      this.error = responseErr;
    });
   }

   ngOnDestroy(){
     this.errorSubscription.unsubscribe();
   }

  onCreatePost(postData: { title: string; content: string }) {
    console.log(postData);
     this.service.createPost(postData.title,postData.content);
  }

  onFetchPosts(){
    this.isFetching = true;
    this.service.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },error => {
      this.handlerError(error);
    });
  }

  onClearPosts() {
     this.service.onClearPosts().subscribe((responseData:any) =>{
       console.log(responseData);
      this.loadedPosts = [];
     },error => {
       this.handlerError(error);
     });
  }

  private handlerError(error){
    console.log(error);
      this.error = error.message;
      this.isFetching = false;
  }

  clearErrorMsg(){
    this.error = null;
  }
}
