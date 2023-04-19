import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  showmsg:any=false;
  flag:boolean = false;
  data={
    email:"",
    name:"",
    dob:"",
    gender:"",
    pno:"",
    password:"",
    userAddress:
   {
       address:"",
       zipCode:"",
       city:"",
       state:"",
       country:""
   }


  }

ngOnInit(): void {

}

constructor(private user:UserServiceService){}

  addUser()
  {
    this.flag=true;
    console.log(this.data)
    this.user.addUser(this.data).subscribe(
      response=>
      {
        console.log(response);
        this.flag=false;
        this.showmsg = true;
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}
