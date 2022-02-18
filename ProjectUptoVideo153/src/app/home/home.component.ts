import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
  }

  goToServersPage(id: string) {
    this.router.navigate(["/servers", id, 'edit'],
      {
        queryParams: { allowToEdit: '1', allowTest: '2' },
        fragment: 'loadPage'
      });
  }
  login(){
    this.authService.logIn();
  }
  logout(){
    this.authService.logOut();
  }
}
