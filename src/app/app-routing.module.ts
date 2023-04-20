import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { SignUpComponent } from './MyComponent/sign-up/sign-up.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';
import { UserAreaComponent } from './MyComponent/user-area/user-area.component';
import { PublishShowComponent } from './MyComponent/publish-show/publish-show.component';
import { AllUsersComponent } from './MyComponent/all-users/all-users.component';

const routes: Routes = [
  {path:"signIn" , component:LoginComponent},
  {path:"", component:DashboardComponent},
  {path:"signUp" , component:SignUpComponent},
  {path:"userArea", component: UserAreaComponent},
  {path:"adminArea",component:AdminAreaComponent,
  children:
  [

   {path:"publishShow",component:PublishShowComponent},
   {path:"allUsers",component:AllUsersComponent},
]


},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
