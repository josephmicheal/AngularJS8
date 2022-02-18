import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMsg : string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.errorMsg = this.activatedRoute.snapshot.data["error"];
    this.activatedRoute.data.subscribe((data : Data)=>{
      this.errorMsg = data['error'];
    });
  }

}
