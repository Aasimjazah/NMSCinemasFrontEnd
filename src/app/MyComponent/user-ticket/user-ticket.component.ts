import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/MyServices/show.service';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {

  shows: any;
  user:any={
    email:"",
    name:"",
    dob:"",
    gender:"",
    pno:"",
    password:""
   };
   initialPrice:number=0;
   finalPrice:number=0;
   ticketCount:number=0;
   ticketArray:string[]=[];
   constructor(private showService:ShowService,private route: ActivatedRoute)
  {

  }

 ngOnInit(): void {
  
    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.showService.getTicketsByEmail(this.user.email).subscribe(
    response=>
    {
      console.log(response);
      this.shows = response;
      for(const show of this.shows)
      {
         this.ticketArray = show.tickets.split(",");
         this.initialPrice = parseInt(show.price, 10);
      }
    
      console.log(this.finalPrice);
      console.log(this.ticketArray.length);
     
    },
    error=>
    {

    }
   )

    }
}
