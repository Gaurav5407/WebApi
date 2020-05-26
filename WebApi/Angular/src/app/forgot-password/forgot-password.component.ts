import { Component, OnInit } from '@angular/core';
import { RegisterdetailService } from '../Services/registerdetail.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public service: RegisterdetailService,private toastr:ToastrService,private dialogRef:MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
  }
  OnForgotPassword()
  {
    this.service.forgotPassword().subscribe(
      res=> {
        if(res == true)
        {
          this.service.formModel.reset();
          this.dialogRef.close();
          this.toastr.success('sent','Password suceefuly sent.');
        }
        else{
          this.toastr.error('not sent','password not sent.');
        }
      },
      err =>{
        console.log(err);
      }
    )
  }
}
