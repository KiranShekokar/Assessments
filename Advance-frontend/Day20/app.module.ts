import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { EmpsComponent } from './emps/emps.component';
import { SiComponent } from './si/si.component';
import { ProductComponent } from './product/product.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesconceptComponent } from './pipesconcept/pipesconcept.component';
import { EmployeeComponent } from './employee/employee.component';
import { GradesPipe } from './grades.pipe';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { JsonComponent } from './json/json.component';
import { StudentsCrudComponent } from './students-crud/students-crud.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    EmpsComponent,
    SiComponent,
    ProductComponent,
    DirectivesComponent,
    PipesconceptComponent,
    EmployeeComponent,
    GradesPipe,
    UserComponent,
    CustomerComponent,
    JsonComponent,
    StudentsCrudComponent,
    ProductdetailsComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
