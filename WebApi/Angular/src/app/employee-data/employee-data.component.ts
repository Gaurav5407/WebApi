import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../Services/employee-detail.service';
import { CountryService } from '../Services/country.service';
import { Country } from './Country';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor(public service : EmployeeDetailService,
    public countryService : CountryService,
    private toastr : ToastrService,
    private dialogRef:MatDialogRef<EmployeeDataComponent>,
    private router: Router) { }
  public countryList:any = [];
  ngOnInit(): void {
    this.countryService.getCountryList().subscribe(
      res => {
        this.countryList = res;
        console.log(this.countryList);
      },
      err => {
        console.log(err);
      }
    );
    // this.service.formModel.reset();
  }
  saveEmployeeData()
  {
    this.service.saveEmployeeDetail().subscribe(
      res=> {
        if(res == 1)
        {
          this.service.formModel.reset();
          this.dialogRef.close();
          this.toastr.success('Employee detail addedd',' Add successful.');
          window.location.reload();
          // this.router.navigate(['/Menu/Employee']);
        }
        else{
          this.service.formModel.reset();
          this.dialogRef.close();
          this.toastr.success('Employee detail edited',' Edit successful.');
          window.location.reload();
          // this.router.navigate(['/Menu/Employee']);
        }
      },
      err =>{
        console.log(err);
      }
    );
  }

}
