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
  shows:any;
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

  book(show:any)
      {
          console.log(show);
      }

      selectSeat(show1:any,seatNo:string)
      {
        console.log("select seat calling", seatNo);
             if(show1[seatNo]=="available")
             {
              console.log("inside if");
              this.shows.seatNo = "asimjazah8@gmail.com";
             }
             else if(show1[seatNo]!="available")
             {
              console.log("inside else");

              this.shows.seatNo = "available";
             }
             console.log("After selected seat",this.shows);
      }

}


