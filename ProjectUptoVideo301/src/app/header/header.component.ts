import { Component,EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthenticationService } from '../authentication/auth.service';
import { Subscription } from 'rxjs';


@Component({
    selector:"header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent implements OnInit,OnDestroy{

    constructor(private dataStorageService:DataStorageService,private authService:AuthenticationService){}

    userSubscription:Subscription;
    isAuthenticated:boolean = false;

    ngOnInit(){
        this.userSubscription =  this.authService.user.subscribe( user => {
            
            // !user ? false : true; is becoming as below
            this.isAuthenticated = !!user;
        });
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }

    @Output() featureSelected = new EventEmitter<string>();
    onFeatureSelect(feature:string){
        this.featureSelected.emit(feature);
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}