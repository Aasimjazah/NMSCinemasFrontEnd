import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/MyServices/show.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  productId:number=0;
  shows:any=
  {

  };

  constructor(private showService:ShowService){}
  ngOnInit(): void {
      this.showService.getAllShows().subscribe(response=>
        {
         console.log(response);
         this.shows=response;
        },
        error=>
        {

        });
  }

  changeStatus(id:any, status:any)
  {
    this.showService.changeShowStatusById(id, status).subscribe(response=>
      {
       console.log(response);
       this.shows=response;
      },
      error=>
      {

      });
  }
}
