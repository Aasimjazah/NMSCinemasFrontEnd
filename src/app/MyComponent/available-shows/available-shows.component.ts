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

  movieName: any;
  shows: any;
  show1:any;
  constructor(private route: ActivatedRoute, private showService: ShowService, private userService: UserServiceService) { }

  ngOnInit() {
    this.movieName = this.route.snapshot.paramMap.get('movieName');
    console.log(this.movieName); // will log the movie name to the console

    this.showService.getShowByMovie(this.movieName).subscribe(response => {
      this.shows = response;

      console.log(this.shows);
    },
      error => {

      })


  }

  
  selectSeat(show1: any, seatNo: string) 
  {
    if (seatNo == "a1") 
    {
      if (show1.a1 == "available") {
         show1.a1 = "asimjazah8@gmail.com";
      }
      else{
       show1.a1 = "available";
      }
    }
    else if (seatNo == "a2") {
      if (show1.a2 == "available") {
        show1.a2 = "asimjazah8@gmail.com";
      }
      else
      {
        show1.a2 = "available";
      }
    }
    else if (seatNo == "a3") {
      if (show1.a3 == "available") {
        show1.a3 = "asimjazah8@gmail.com";
      }
      else{
        show1.a3 = "available";
      }
    }
    else if (seatNo == "a4") {
      if (show1.a4 == "available") {
        show1.a4 = "asimjazah8@gmail.com";
      }
      else{
        show1.a4 = "available";
      }
    }
    else if (seatNo == "a5") {
      if (show1.a5 == "available") {
        show1.a5 = "asimjazah8@gmail.com";
      }
      else{
        show1.a5 = "available";
      }
    }
    else if (seatNo == "a6") {
      if (show1.a6 == "available") {
        show1.a6 = "asimjazah8@gmail.com";
      }
      else{
        show1.a6 = "available";
      }
    }
    else if (seatNo == "a7") {
      if (show1.a7 == "available") {
        show1.a7 = "asimjazah8@gmail.com";
      }
      else{
        show1.a7 = "available";
      }
    }
    else if (seatNo == "a8") {
      if (show1.a8 == "available") {
        show1.a8 = "asimjazah8@gmail.com";
      }
      else{
        show1.a8 = "available";
      }
    }
    else if (seatNo == "b1") {
      if (show1.b1 == "available") {
        show1.b1 = "asimjazah8@gmail.com";
      }
      else{
        show1.b1 = "available";
      }
    }
    else if (seatNo == "b2") {
      if (show1.b2 == "available") {
        show1.b2 = "asimjazah8@gmail.com";
      }
      else{
        show1.b2 = "available";
      }
    }
    else if (seatNo == "b3") {
      if (show1.b3 == "available") {
        show1.b3 = "asimjazah8@gmail.com";
      }
      else{
        show1.b3 = "available";
      }
    }
    else if (seatNo == "b4") {
      if (show1.b4 == "available") {
        show1.b4 = "asimjazah8@gmail.com";
      }
      else{
        show1.b4 = "available";
      }
    }
    else if (seatNo == "b5") {
      if (show1.b5 == "available") {
        show1.b5 = "asimjazah8@gmail.com";
      }
      else{
        show1.b5 = "available";
      }
    }
    else if (seatNo == "b6") {
      if (show1.b6 == "available") {
        show1.b6 = "asimjazah8@gmail.com";
      }
      else{
        show1.b6 = "available";
      }
    }
    else if (seatNo == "b7") {
      if (show1.b7 == "available") {
        show1.b7 = "asimjazah8@gmail.com";
      }
      else{
        show1.b7 = "available";
      }
    }
    else if (seatNo == "b8") {
      if (show1.b8 == "available") {
        show1.b8 = "asimjazah8@gmail.com";
      }
      else{
        show1.b8 = "available";
      }
    }
    this.show1=show1;
    // console.log("select seat calling", seatNo);
    //      if(show1[seatNo]=="available")
    //      {
    //       console.log("inside if");
    //       this.shows.seatNo = "asimjazah8@gmail.com";
    //      }
    //      else if(show1[seatNo]!="available")
    //      {
    //       console.log("inside else");

    //       this.shows.seatNo = "available";
    //      }
    //      console.log("After selected seat",this.shows);
  }


  showBook() {
    this.showService.updateShowById(this.show1).subscribe(
      response=>
      {
        console.log(response);
      },
      error=>
      {}
    )
    
    }

}


