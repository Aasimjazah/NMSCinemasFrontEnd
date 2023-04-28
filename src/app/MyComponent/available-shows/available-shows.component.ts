import { SafeCall } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/MyServices/show.service';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-available-shows',
  templateUrl: './available-shows.component.html',
  styleUrls: ['./available-shows.component.css']
})
export class AvailableShowsComponent {
flag = false;
  movieName: any;
  shows: any;
  show1: any;
  count: number = 0;
  price: number = 0;
  tickets: string[] = [];
  user:any={
    email:"",
    name:"",
    dob:"",
    gender:"",
    pno:"",
    password:""
 
   };

   ticketBooking:any=
   {
    screenId:0,
    movieName:"",
    date:"",
    time:"",
    language:"",
    price:"",
    tickets:"",
    userId:""
   }
 
  constructor(private route: ActivatedRoute, private showService: ShowService, private userService: UserServiceService) { }

  ngOnInit() {
    this.movieName = this.route.snapshot.paramMap.get('movieName');
    console.log(this.movieName); // will log the movie name to the console

    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user);

    this.showService.getShowByMovie(this.movieName).subscribe(response => {
      this.shows = response;

      console.log(this.shows);
    },
      error => {

      })


  }


    selectSeat(show1: any, seatNo: string) {
      if (seatNo == "a1") {
        if (show1.a1 == "available") {
          show1.a1 = this.user.email;
          this.tickets.push("a1");
          this.count += 1;
        }
        else {
          show1.a1 = "available";
          this.count -= 1;
          const index = this.tickets.indexOf("a1");
          if (index > -1) {
            this.tickets.splice(index, 1);
          }
        }
      }
    else if (seatNo == "a2") {
        if (show1.a2 == "available") {
          show1.a2 = this.user.email;
          this.tickets.push("a2");
          this.count += 1;
        }
        else {
          show1.a2 = "available";
          this.count = -1;
        const index = this.tickets.indexOf("a2");
        const removedElement = this.tickets.splice(index, 1)[0];
        }
      }
      else if (seatNo == "a3") {
        if (show1.a3 == "available") {
          show1.a3 = this.user.email;
          this.tickets.push("a3");
          this.count += 1;
        }
        else {
          show1.a3 = "available";
          this.count -= 1;
        }
      }
      else if (seatNo == "a4") {
        if (show1.a4 == "available") {
          show1.a4 = this.user.email;
          this.tickets.push("a4");
          this.count += 1;
        }
        else {
          show1.a4 = "available";
          this.count -= 1;
        }
      }
      else if (seatNo == "a5") {
        if (show1.a5 == "available") {
          show1.a5 = this.user.email;
          this.tickets.push("a5");
          this.count += 1;
        }
        else {
          show1.a5 = "available";
          this.count -= 1;
        }
      }
      else if (seatNo == "a6") {
        if (show1.a6 == "available") {
          show1.a6 = this.user.email;
          this.tickets.push("a6");
          this.count += 1;
        }
        else {
          show1.a6 = "available";
          this.count -= 1;
        }
      }
      else if (seatNo == "a7") {
        if (show1.a7 == "available") {
          show1.a7 = this.user.email;
          this.tickets.push("a7");
          this.count += 1;
        }
        else {
          show1.a7 = "available";
          this.count -= 1;
        }
      }
      else if (seatNo == "a8") {
        if (show1.a8 == "available") {
          show1.a8 = this.user.email;
          this.tickets.push("a8");
          this.count += 1;
        }
        else {
          show1.a8 = "available";
          this.count -= 1;
        }
      }

      //----B------
      else if (seatNo == "b1") {
        if (show1.b1 == "available") {
          show1.b1 = this.user.email;
          this.tickets.push("b1");
          this.count += 1;
        }
        else {
          show1.b1 = "available";
        }
      }
      else if (seatNo == "b2") {
        if (show1.b2 == "available") {
          show1.b2 = this.user.email;
          this.tickets.push("b2");
          this.count += 1;
        }
        else {
          show1.b2 = "available";
        }
      }
      else if (seatNo == "b3") {
        if (show1.b3 == "available") {
          show1.b3 = this.user.email;
          this.tickets.push("b3");
          this.count += 1;
        }
        else {
          show1.b3 = "available";
        }
      }
      else if (seatNo == "b4") {
        if (show1.b4 == "available") {
          show1.b4 = this.user.email;
          this.tickets.push("b4");
          this.count += 1;
        }
        else {
          show1.b4 = "available";
        }
      }
      else if (seatNo == "b5") {
        if (show1.b5 == "available") {
          show1.b5 = this.user.email;
          this.tickets.push("b5");
          this.count += 1;
        }
        else {
          show1.b5 = "available";
        }
      }
      else if (seatNo == "b6") {
        if (show1.b6 == "available") {
          show1.b6 = this.user.email;
          this.tickets.push("b6");
          this.count += 1;
        }
        else {
          show1.b6 = "available";
        }
      }
      else if (seatNo == "b7") {
        if (show1.b7 == "available") {
          show1.b7 = this.user.email;
          this.tickets.push("b7");
          this.count += 1;
        }
        else {
          show1.b7 = "available";
        }
      }
      else if (seatNo == "b8") {
        if (show1.b8 == "available") {
          show1.b8 = this.user.email;
          this.tickets.push("b8");
          this.count += 1;
        }
        else {
          show1.b8 = "available";
        }
      }

      //-------------

      else if (seatNo == "c1") {
        if (show1.c1 == "available") {
          show1.c1 = this.user.email;
          this.tickets.push("c1");
          this.count += 1;
        }
        else {
          show1.c1 = "available";
        }
      }
      else if (seatNo == "c2") {
        if (show1.c2 == "available") {
          show1.c2 = this.user.email;
          this.tickets.push("c2");
          this.count += 1;
        }
        else {
          show1.c2 = "available";
        }
      }
      else if (seatNo == "c3") {
        if (show1.c3 == "available") {
          show1.c3 = this.user.email;
          this.tickets.push("c3");
          this.count += 1;
        }
        else {
          show1.c3 = "available";
        }
      }
      else if (seatNo == "c4") {
        if (show1.c4 == "available") {
          show1.c4 = this.user.email;
          this.tickets.push("c4");
          this.count += 1;
        }
        else {
          show1.c4 = "available";
        }
      }
      else if (seatNo == "c5") {
        if (show1.c5 == "available") {
          show1.c5 = this.user.email;
          this.tickets.push("c5");
          this.count += 1;
        }
        else {
          show1.c5 = "available";
        }
      }
      else if (seatNo == "c6") {
        if (show1.c6 == "available") {
          show1.c6 = this.user.email;
          this.tickets.push("c6");
          this.count += 1;
        }
        else {
          show1.c6 = "available";
        }
      }
      else if (seatNo == "c7") {
        if (show1.c7 == "available") {
          show1.c7 = this.user.email;
          this.tickets.push("c7");
          this.count += 1;
        }
        else {
          show1.c7 = "available";
        }
      }
      else if (seatNo == "c8") {
        if (show1.c8 == "available") {
          show1.c8 = this.user.email;
          this.tickets.push("c8");
          this.count += 1;
        }
        else {
          show1.c8 = "available";
        }
      }

      //-----------------d
      else if (seatNo == "d1") {
        if (show1.d1 == "available") {
          show1.d1 = this.user.email;
          this.tickets.push("d1");
          this.count += 1;
        }
        else {
          show1.d1 = "available";
        }
      }
      else if (seatNo == "d2") {
        if (show1.d2 == "available") {
          show1.d2 = this.user.email;
          this.tickets.push("d2");
          this.count += 1;
        }
        else {
          show1.d2 = "available";
        }
      }
      else if (seatNo == "d3") {
        if (show1.d3 == "available") {
          show1.d3 = this.user.email;
          this.tickets.push("d3");
          this.count += 1;
        }
        else {
          show1.d3 = "available";
        }
      }
      else if (seatNo == "d4") {
        if (show1.d4 == "available") {
          show1.d4 = this.user.email;
          this.tickets.push("d4");
          this.count += 1;
        }
        else {
          show1.d4 = "available";
        }
      }
      else if (seatNo == "d5") {
        if (show1.d5 == "available") {
          show1.d5 = this.user.email;
          this.tickets.push("d5");
          this.count += 1;
        }
        else {
          show1.d5 = "available";
        }
      }
      else if (seatNo == "d6") {
        if (show1.d6 == "available") {
          show1.d6 = this.user.email;
          this.tickets.push("d6");
          this.count += 1;
        }
        else {
          show1.d6 = "available";
        }
      }
      else if (seatNo == "d7") {
        if (show1.d7 == "available") {
          show1.d7 = this.user.email;
          this.tickets.push("d7");
          this.count += 1;
        }
        else {
          show1.d7 = "available";
        }
      }
      else if (seatNo == "d8") {
        if (show1.d8 == "available") {
          show1.d8 = this.user.email;
          this.tickets.push("d8");
          this.count += 1;
        }
        else {
          show1.d8 = "available";
        }
      }
      //-----E----
      else if (seatNo == "e1") {
        if (show1.e1 == "available") {
          show1.e1 = this.user.email;
          this.tickets.push("e1");
          this.count += 1;
        }
        else {
          show1.e1 = "available";
        }
      }
      else if (seatNo == "e2") {
        if (show1.e2 == "available") {
          show1.e2 = this.user.email;
          this.tickets.push("e2");
          this.count += 1;
        }
        else {
          show1.e2 = "available";
        }
      }
      else if (seatNo == "e3") {
        if (show1.e3 == "available") {
          show1.e3 = this.user.email;
          this.tickets.push("e3");
          this.count += 1;
        }
        else {
          show1.e3 = "available";
        }
      }
      else if (seatNo == "e4") {
        if (show1.e4 == "available") {
          show1.e4 = this.user.email;
          this.tickets.push("e4");
          this.count += 1;
        }
        else {
          show1.e4 = "available";
        }
      }
      else if (seatNo == "e5") {
        if (show1.e5 == "available") {
          show1.e5 = this.user.email;
          this.tickets.push("e5");
          this.count += 1;
        }
        else {
          show1.e5 = "available";
        }
      }
      else if (seatNo == "e6") {
        if (show1.e6 == "available") {
          show1.e6 = this.user.email;
          this.tickets.push("e6");
          this.count += 1;
        }
        else {
          show1.e6 = "available";
        }
      }
      else if (seatNo == "e7") {
        if (show1.e7 == "available") {
          show1.e7 = this.user.email;
          this.tickets.push("e7");
          this.count += 1;
        }
        else {
          show1.e7 = "available";
        }
      }
      else if (seatNo == "e8") {
        if (show1.e8 == "available") {
          show1.e8 = this.user.email;
          this.tickets.push("e8");
          this.count += 1;
        }
        else {
          show1.e8 = "available";
        }
      }

      //-----F----
      else if (seatNo == "f1") {
        if (show1.f1 == "available") {
          show1.f1 = this.user.email;
          this.tickets.push("f1");
          this.count += 1;
        }
        else {
          show1.f1 = "available";
        }
      }
      else if (seatNo == "f2") {
        if (show1.f2 == "available") {
          show1.f2 = this.user.email;
          this.tickets.push("f2");
          this.count += 1;
        }
        else {
          show1.f2 = "available";
        }
      }
      else if (seatNo == "f3") {
        if (show1.f3 == "available") {
          show1.f3 = this.user.email;
          this.tickets.push("f3");
          this.count += 1;
        }
        else {
          show1.f3 = "available";
        }
      }
      else if (seatNo == "f4") {
        if (show1.f4 == "available") {
          show1.f4 = this.user.email;
          this.tickets.push("f4");
          this.count += 1;
        }
        else {
          show1.f4 = "available";
        }
      }
      else if (seatNo == "f5") {
        if (show1.f5 == "available") {
          show1.f5 = this.user.email;
          this.tickets.push("f5");
          this.count += 1;
        }
        else {
          show1.f5 = "available";
        }
      }
      else if (seatNo == "f6") {
        if (show1.f6 == "available") {
          show1.f6 = this.user.email;
          this.tickets.push("f6");
          this.count += 1;
        }
        else {
          show1.f6 = "available";
        }
      }
      else if (seatNo == "f7") {
        if (show1.f7 == "available") {
          show1.f7 = this.user.email;
          this.tickets.push("f7");
          this.count += 1;
        }
        else {
          show1.f7 = "available";
        }
      }
      else if (seatNo == "f8") {
        if (show1.f8 == "available") {
          show1.f8 = this.user.email;
          this.tickets.push("f8");
          this.count += 1;
        }
        else {
          show1.f8 = "available";
        }
      }
      this.show1 = show1;
      console.log(this.show1);
      this.price = this.show1.price * this.count;
      console.log(this.count);
      console.log(this.price);
      console.log(this.tickets);

      this.ticketBooking.screenId=this.show1.id;
      this.ticketBooking.movieName=this.movieName;
      this.ticketBooking.date=this.show1.date;
      this.ticketBooking.time=this.show1.time;
      this.ticketBooking.language=this.show1.language;
      this.ticketBooking.price=this.show1.price;
      this.ticketBooking.userId=this.user.email;

      console.log(this.ticketBooking);
    }

    

    showBook() {
      this.flag = true;
      this.showService.updateShowById(this.show1).subscribe(
        response => {
          console.log(response);
        },
        error => { }
      )
     
      const tickets = this.tickets.join(",");
      this.ticketBooking.tickets=tickets;
      console.log(this.ticketBooking);
      this.ticketBooking.price=this.price;
      this.showService.addBooking(this.ticketBooking).subscribe(
        response=>
        {
          console.log(response);
        },
        error=>
        {

        }
      )
    }

    closeModel()
    {
      this.flag = false;
    }

  }


