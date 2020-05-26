import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from './Services/auth.guard';
// {path:'',redirectTo:'/login',pathMatch:"full"},
//   {path:'login',component: AppComponent
// {path:'',redirectTo:'/SignUp',pathMatch:"full"},
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {
    path:'Menu',
    canActivate:[AuthGuard],
    component:NavBarComponent,
    children:[
      {path:'Employee',component:EmployeeTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
