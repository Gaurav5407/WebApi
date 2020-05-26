import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../employee-table/Employee';
import { FormBuilder, Validators } from '@angular/forms';
import { THRESHOLD_DIFF } from '@progress/kendo-angular-popup/dist/es2015/services/scrollable.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient,private fb:FormBuilder) {  }
  formModel = this.fb.group({
    id : [''],
    name : ['',Validators.required],
    email :['',[Validators.required,Validators.email]],
    job_title : ['',Validators.required],
    country_name : ['',Validators.required],
    gender:['',Validators.required],
    phone_no:['',Validators.required],
    address : ['',Validators.required]
  });
  getEmployeeList()
  {
    return this.http.get(environment.apiBaseURI + 'Employee');
  }
  // editEmployeeDetail()
  // {
  //   this.http.post(environment.apiBaseURI+'Employee/Edit',)
  // }
  setEmployeeDetail(EmployeeData:Employee)
  {
   this.formModel.setValue(EmployeeData);
  }

  saveEmployeeDetail()
  {
    var body = {
      id : +this.formModel.value.id,
      name : this.formModel.value.name,
      email : this.formModel.value.email,
      job_title : this.formModel.value.job_title,
      country_name : this.formModel.value.country_name,
      gender : this.formModel.value.gender,
      phone_no : this.formModel.value.phone_no,
      address : this.formModel.value.address
    };
   return this.http.post(environment.apiBaseURI + 'Employee/Add',body);
  }
  deleteEmployeeDetail(id)
  {
    return this.http.delete(environment.apiBaseURI +'Employee/'+id);
  }
}
