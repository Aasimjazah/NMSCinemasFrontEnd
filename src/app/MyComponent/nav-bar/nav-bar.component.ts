import { Component } from '@angular/core';
import { ServiceService } from 'src/app/MyServices/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user:any;
  showResetForm=false;

  searchProduct:any;
  searchResult:any;

  constructor(public service2: ServiceService){

  }

  signOut()
  {
    sessionStorage.removeItem('user');
    this.service2.saveState("main");
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user");
    this.user=JSON.parse(this.user);

  }


  // search()
  // {
  //   console.log("inside search function");
  //   console.log(this.searchProduct);
  //   this.productService.getNameOrCategory(this.searchProduct).subscribe(
  //     response=>{
  //        this.service2.searchResponse=response;
  //        this.service2.searchResponseCon=true;
  //     },
  //     error=>
  //     {

  //     }
  //   )
  // }

}
