import { Injectable } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterdetailService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  private baseUrl="http://localhost:64210/api";
  formModel = this.fb.group({
    Name : ['',Validators.required],
    Email : ['',[Validators.required,Validators.email]],
    Passwords: this.fb.group({
      Password : ['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword : ['',Validators.required]
    },{validators:this.comparePasswords})
  });
  loginFormModel = this.fb.group({
    Email : ['',[Validators.required,Validators.email]],
    Password : ['',[Validators.required,Validators.minLength(6)]]
  });
  forgotFormModel = this.fb.group({
    Email : ['',[Validators.required,Validators.email]]
  });

  comparePasswords(fb: FormGroup)
  {
    let confirmPasswrdCtrl  = fb.get('ConfirmPassword');
    if(confirmPasswrdCtrl.errors == null || 'passwordMissMatch' in confirmPasswrdCtrl.errors)
    {
      if(fb.get('Password').value !=confirmPasswrdCtrl.value)
        confirmPasswrdCtrl.setErrors({passwordMissMatch:true});
      else
        confirmPasswrdCtrl.setErrors(null);
    }
  }

  signUp(){
    var body ={
      Name : this.formModel.value.Name,
      Email : this.formModel.value.Email,
      Password : this.formModel.value.Passwords.Password
    };
    return this.http.post(this.baseUrl+'/ApplicationUser/Register',body);
  }
  signIn()
  {
    var body ={
      Email : this.loginFormModel.value.Email,
      Password : this.loginFormModel.value.Password
    };
    return this.http.post(this.baseUrl+'/ApplicationUser/Login',body);
  }
  forgotPassword()
  {
    var body ={
      Email : this.forgotFormModel.value.Email
    };
    return this.http.post(this.baseUrl+'/ApplicationUser/ForgotPassword',body);
  }
}
