import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  userFormGroup: FormGroup;
  customNames: string[] = ["Joe", "King"];

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required,this.customValidation2CheckName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.asycCustomValidation2CheckEmail)
      }),
      'gender': new FormControl('male'),
      "hobbies": new FormArray([])
    });

    // this.userFormGroup.statusChanges.subscribe((newStatus) => {
    //   console.log(newStatus);
    // });

    this.userFormGroup.valueChanges.subscribe((newValues) => {
      console.log(newValues);
    });
  }

  asycCustomValidation2CheckEmail(formEmailControl: FormControl): Promise<any>|Observable<any> {
   const promise = new Promise<any>((resolve,_reject) => {
     setTimeout(()=>{
       if(formEmailControl.value === 'joe@email.com'){
        resolve({'InvalidEmail':true});
       }else{
         resolve(null);
       }
     },3000);
   });
   return promise;
  }

  customValidation2CheckName(formNameControl: FormControl): { [name: string]: boolean } {
    if (this.customNames.indexOf(formNameControl.value) == -1) {
      return {"invalidName": true};
    }
    return null;
  }


  addNewHobby() {
    const newHobby: FormControl = new FormControl(null, Validators.required);
    (<FormArray>this.userFormGroup.get("hobbies")).push(newHobby);
  }

  submitUserForm() {
    console.log(this.userFormGroup);
  }

  resetUserForm() {
    this.userFormGroup.reset();

    this.userFormGroup.setValue({
      'userData': {
        'username': 'UserName',
        'email': 'UserEmail',
      },
      'gender':'male',
      "hobbies": []
    });

    this.userFormGroup.patchValue({
      'gender':'male'
    });
  }

}
