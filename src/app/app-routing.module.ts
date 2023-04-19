import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';

const routes: Routes = [
  {path:"signIn" , component:LoginComponent},
  {path:"", component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
