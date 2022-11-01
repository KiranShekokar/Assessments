import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { StudentsCrudComponent } from './students-crud/students-crud.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path :"",component :DemoComponent},
  {path:"students" , component : StudentsCrudComponent , canActivate : [AuthguardService]},
 {path:"login",component : LoginComponent},
  {path : "user" , component :UserComponent},
  {path :"product", component :ProductComponent},
  {path :"details/:id",component: ProductdetailsComponent},
  {path :"logout", component :LogoutComponent},
  //{path : "login" , component : LoginComponent , canActivate : [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



