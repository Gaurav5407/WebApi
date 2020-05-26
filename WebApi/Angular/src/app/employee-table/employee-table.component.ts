import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDetailService } from '../Services/employee-detail.service';
import { process } from '@progress/kendo-data-query';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { Employee } from './Employee';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';
import { DeleteService } from '../Services/delete.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {


  constructor(private service: EmployeeDetailService,private dialog:MatDialog,private deleteService: DeleteService,private toastr: ToastrService) { }
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  // gridData: any = [] ;
  // employeeList:any[];
  // public mySelection: string[] = [];

  // ngOnInit(): void {
  //   this.service.getEmployeeList().subscribe(
  //     res => this.gridData = res as [] 
  //   );
  // this.employeeList = this.gridData;
  // }
  public EmployeeList: Employee[];
  public gridView: any[];
  public mySelection: string[] = [];

  ngOnInit(): void {
    this.service.getEmployeeList().subscribe(
      (res: Employee[]) => {
        this.EmployeeList = res;
        console.log(this.EmployeeList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  // sidenavEvents(str) {
  //   console.log(str);
  // }
  public onFilter(inputValue: string): void { 
    this.gridView = process(this.EmployeeList, {
        filter: {
            logic: "or",
            filters: [
                {
                    field: 'name',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'job_title',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'email',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'phone_no',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'address',
                    operator: 'contains',
                    value: inputValue
                }
            ],
        }
    }).data;

    this.dataBinding.skip = 0;
  }
  onEdit(employeeData:Employee)
  {
    this.service.setEmployeeDetail(employeeData);
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
     dialogConfig.width = "80%";

    this.dialog.open(EmployeeDataComponent,dialogConfig);
  }
  onCreate()
  {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
     dialogConfig.width = "80%";

    this.dialog.open(EmployeeDataComponent,dialogConfig);
  }
  onDelete(id:number)
  {
    this.deleteService.openConfirmDialog().afterClosed().subscribe(
      reso =>{
        if(reso){
          this.service.deleteEmployeeDetail(id).subscribe(
            res=>{
              this.toastr.success('Record deleted','Seccessfully deleted.');
            },
            err =>{
              console.log(err);
            }
          );
         
        }
      }
    );
  }
}


