import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './MyComponent/nav-bar/nav-bar.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { AdminAreaComponent } from './MyComponent/admin-area/admin-area.component';
import { UserServiceService } from './MyServices/user-service.service';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './MyComponent/sign-up/sign-up.component';
import { UserAreaComponent } from './MyComponent/user-area/user-area.component';
import { PublishShowComponent } from './MyComponent/publish-show/publish-show.component';
import { AllUsersComponent } from './MyComponent/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AdminAreaComponent,
    SignUpComponent,
    UserAreaComponent,
    PublishShowComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
