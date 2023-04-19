import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/MyServices/service.service';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = {
    email: "",
    password: "",
  }

  ngOnInit(): void {

  }

  constructor(private user: UserServiceService, private router: Router,private service2:ServiceService) { }

  getApiUrl(username: string) {
    const [, domain] = username.split('@');
    if (domain === 'admin.com') {
      return 'http://localhost:1111/checkAdmin';
    } else {
      return 'http://localhost:1111/checkUser';
    }
  }

  responseData: any = {
    email: "",
    name: "",
    dob: "",
    gender: "",
    pno: "",
    password: ""

  };

  SignIn() {

    const apiUrl = this.getApiUrl(this.data.email);

    this.user.SignIn(this.data, apiUrl).subscribe(
      response => {
        this.responseData = response;
        console.log(this.responseData.email);
        const [, domain] = this.responseData.email.split('@');

        if (domain === 'admin.com') {
          this.service2.saveState("admin");
          const user = JSON.stringify(response);
          sessionStorage.setItem('admin', user);
          this.router.navigate(
            ['/adminArea'],
          );
        }
        else {
          this.service2.saveState("user");
          const user = JSON.stringify(response);
          sessionStorage.setItem('user', user);
          this.router.navigate(
            ['/userArea'],
          );
        }


      },
      error => {
        console.log(error);
      }
    )

  }
}
