import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/MyServices/show.service';
import { UserServiceService } from 'src/app/MyServices/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  product: any;
  user: any;
  flag: boolean = true;
  showSingIn: boolean = false;
  showSignUp: boolean = false;

  products: any =
    {

    }
  constructor(private showService: ShowService, private router: Router, private userService: UserServiceService) { }
  ngOnInit(): void {

    let userTemp = sessionStorage.getItem('user') as string;
    this.user = JSON.parse(userTemp);

    this.showService.getAllMovies().subscribe(response => {
      this.products = response;
    },
      error => {

      })
  }


  // order() {
  //   if (this.user != null) {
  //     const product = JSON.stringify(this.product);
  //     sessionStorage.setItem("product", product);
  //     this.router.navigate(
  //       ['/order'],
  //     );
  //   }
  //   else {
  //     console.log("inside else condition");
  //     this.showSingIn = true;
  //   }
  // }


  //sign in method starts here
  // data = {
  //   email: "",
  //   password: "",
  // }
  // SignIn() {

  //   const apiUrl = "http://localhost:1111/checkUser"

  //   this.userService.SignIn(this.data, apiUrl).subscribe(
  //     response => {
  //       const user = JSON.stringify(response);
  //       sessionStorage.setItem('user', user);
  //       this.router.navigate(
  //         ['/order'],
  //       );
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );

  // }
  // signIn method ends here



  // signUp method starts here
  userData = {
    email: "",
    name: "",
    dob: "",
    gender: "",
    pno: "",
    password: "",
    userAddress:
    {
      address: "",
      zipCode: "",
      city: "",
      state: "",
      country: ""
    }
  }

  // addUser()
  // {
  //   console.log(this.userData)
  //   this.userService.addUser(this.userData).subscribe(
  //     response=>
  //     {
  //       console.log(response);
  //       const user = JSON.stringify(response);
  //       console.log(user);
  //       sessionStorage.setItem('user', user);
  //       this.router.navigate(
  //         ['/order'],
  //       );
  //     },
  //     error=>
  //     {
  //       console.log(error);
  //     }
  //   )
  // }
  // signUp method ends here


    //searchMovie method starts here
    searchProduct:any;
    searchMovie()
    {
      console.log("inside search function");
      console.log(this.searchProduct);

      if(this.searchProduct=="")
      {
        this.showService.getAllMovies().subscribe(response => {
          this.products = response;
        },
          error => {

          })
      }

      this.showService.getByMovieName(this.searchProduct).subscribe(
        response=>{
          this.products = response;
          console.log(response);
        },
        error=>
        {

        }
      )
    }

     //searchMovie method ends here


     //searchByLanguage method starts here
     @ViewChild('languageSelect') languageSelect: any;

     searchByLanguage() {
       const selectedValue = this.languageSelect.nativeElement.value;
       if(selectedValue=="All")
       {
        this.showService.getAllMovies().subscribe(response => {
          this.products = response;
        },
          error => {

          })
       }
       this.showService.getMovieByLanguage(selectedValue).subscribe(
        response=>
        {
           this.products=response;
        },
        error=>
        {

        }
       )
       // Do something with the selected value
     }
}
