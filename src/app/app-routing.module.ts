import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { SignUpComponent } from './MyComponent/sign-up/sign-up.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';

const routes: Routes = [
  {path:"signIn" , component:LoginComponent},
  {path:"", component:DashboardComponent},
  {path:"signUp" , component:SignUpComponent},
  {path:"adminArea",component:AdminAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
