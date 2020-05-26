import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login/login.component';
import{ MatCardModule} from '@angular/material/card';
import{ MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatBadgeModule} from '@angular/material/badge';
import { RegisterdetailService } from './Services/registerdetail.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeDetailService } from './Services/employee-detail.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { CountryService } from './Services/country.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { DeleteService } from './Services/delete.service';
import { AuthGuardService } from './Services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeTableComponent,
    NavBarComponent,
    ForgotPasswordComponent,
    EmployeeDataComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    ReactiveFormsModule,
    MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  InputsModule,
  MatRadioModule,
  MatGridListModule,
  GridModule,
  ExcelModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatDialogModule,
  MatBadgeModule
  ],
  providers: [RegisterdetailService,EmployeeDetailService,CountryService,DeleteService,AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents:[ForgotPasswordComponent,DeleteConfirmComponent]
})
export class AppModule { }
