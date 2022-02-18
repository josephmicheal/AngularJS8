import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genders:string[]= ['male','female'];
  anser : String = '';
  defaultSecret:String = "pet";
  userFormSummary = {
    userNameEntered:'',
    emailEntered:'',
    secretEntered:'',
    secretAnswerEntered:'',
    genderEntered:''
  };

  @ViewChild('f', { static: true }) userForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.userForm.setValue
    //this.userForm.form.setValue
    this.userForm.form.patchValue({
      userIdData : {
        username : suggestedName
      }
    });
  }


  formSubmitted: boolean = false;
    onSubmitForm(){
      console.log(this.userForm);
      this.formSubmitted = true;
      this.userFormSummary.userNameEntered = this.userForm.value.userIdData.username;
      this.userFormSummary.emailEntered = this.userForm.value.userIdData.email;
      this.userFormSummary.secretEntered = this.userForm.value.secret;
      this.userFormSummary.secretAnswerEntered = this.userForm.value.secretAnswer;
      this.userFormSummary.genderEntered = this.userForm.value.gender;
    }

    resetUserForm(){
      this.userForm.reset();
    }
}
