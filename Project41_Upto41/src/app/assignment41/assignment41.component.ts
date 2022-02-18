import { Component } from '@angular/core';

@Component({
    selector:"assignment41",
    templateUrl:"./assignment41.component.html",
    styleUrls:["./assignment41.component.css"]
})
export class Assignment41{
    displayParagraph: boolean = false;
    clickVals = [];

    onClickDisplyDetails(){
        this.clickVals.push(new Date());
        this.displayParagraph = !this.displayParagraph;
    }
}