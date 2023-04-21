import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/MyServices/show.service';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent {
  user:any;
  products: any =
  {

  }
constructor(private showService: ShowService, private router: Router, private userService: UserServiceService) { }
ngOnInit(): void {

   this.user = sessionStorage.getItem('user');
  this.user = JSON.parse(this.user);
  console.log(this.user);

  this.showService.getAllMovies().subscribe(response => {
    this.products = response;
  },
    error => {

    })
}
}
