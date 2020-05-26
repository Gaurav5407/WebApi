import { Component, OnInit } from '@angular/core';
import { RegisterdetailService } from '../Services/registerdetail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: RegisterdetailService,private toastr:ToastrService,private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  onSignUp()
  {
    this.service.signUp().subscribe(
      res =>{
        if(res==true){
        this.service.formModel.reset();
        this.toastr.success('New User Created','Registration successful.');
      }
      else{
        this.toastr.error('Username is already taken','Registration failed.');
      }
      },
      err =>{
        console.log(err);
      }
    );
 
 
 
  }

  onSignIn()
  {
    this.service.signIn().subscribe(
      res => {
        if(res == true)
        {
          localStorage.setItem('username',"admin");
          this.router.navigate(['/Menu/Employee']);
        }
        else
        {
          this.service.formModel.reset();
          this.toastr.error('You entered wrong details','Login failed.');
        }
      }
    )
  }
  forgotPassword()
  {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "30%";
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

 
}
