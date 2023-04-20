import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users:any={

  };

 constructor(private service:UserServiceService)
 {

 }
 ngOnInit(): void {
     this.service.getAllUSers().subscribe(response=>
       {
         console.log(response);
         this.users=response;
       },
       error=>
       {

       }
       );
 }
}
