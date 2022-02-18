import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userForm : FormGroup; 
  projectStatusAll;
  ngOnInit(): void {
      this.userForm = new FormGroup(
        {
          'projectName': new FormControl(null,[Validators.required,this.customProjectNameValidator.bind(this)]),
          'projectEmail': new FormControl(null,[Validators.required,Validators.email]),
          'projectStatus': new FormControl('Critical',this.asyncCustomStatusValidator)
        }
      );
      this.projectStatusAll = this.getProjectStatuss();

      this.userForm.valueChanges.subscribe((newStatus) => {
        console.log(newStatus);
      });
  
  }

  getProjectStatuss() {
    return [
      { 'id': '1', 'value': 'Stable' },
      { 'id': '2', 'value': 'Critical' },
      { 'id': '3', 'value': 'Finished' }
    ];
  }

  customProjectNameValidator(projNameControl: FormControl){
    if( projNameControl.value !== 'Test'){
      return {"InvalidProjectName":true};
    }
    return null;
  }

  asyncCustomStatusValidator(projStatusControl: FormControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        console.log('projStatusControl.value'+projStatusControl.value);
        if(projStatusControl.value !== '1'){
            resolve({"InvalidProjectStatus":true});
        }else{
            resolve(null);
        }
      }),
      3000
    });
    return promise;
  }

  userFormSubmit(){
    console.log(this.userForm);
  }
}
