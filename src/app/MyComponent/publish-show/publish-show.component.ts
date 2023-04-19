import { Component } from '@angular/core';

@Component({
  selector: 'app-publish-show',
  templateUrl: './publish-show.component.html',
  styleUrls: ['./publish-show.component.css']
})
export class PublishShowComponent {

    ShowScreen: any={
      movieName: "Example Movie",
      language: "English",
      date:"Saturday",
      time:"12:30 PM",
      a1: "available",
      a2: "Seat A2 is available",
      a3: "Seat A3 is available",
      a4: "Seat A4 is available",
      a5: "Seat A5 is available",
      a6: "Seat A6 is available",
      a7: "Seat A7 is available",
      a8: "Seat A8 is available",
      b1: "Seat B1 is available",
      b2: "Seat B2 is available",
      b3: "Seat B3 is available",
      b4: "Seat B4 is available",
      b5: "Seat B5 is available",
      b6: "Seat B6 is available",
      b7: "Seat B7 is available",
      b8: "Seat B8 is available",
      c1: "Seat C1 is available",
      c2: "Seat C2 is available",
      c3: "Seat C3 is available",
      c4: "Seat C4 is available",
      c5: "Seat C5 is available",
      c6: "Seat C6 is available",
      c7: "Seat C7 is available",
      c8: "Seat C8 is available",
      d1: "Seat D1 is available",
      d2: "Seat D2 is available",
      d3: "Seat D3 is available",
      d4: "Seat D4 is available",
      d5: "Seat D5 is available",
      d6: "Seat D6 is available",
      d7: "Seat D7 is available",
      d8: "Seat D8 is available",
      e1: "Seat E1 is available",
      e2: "Seat E2 is available",
      e3: "Seat E3 is available",
      e4: "Seat E4 is available",
      e5: "Seat E5 is available",
      e6: "Seat E6 is available",
      e7: "Seat E7 is available",
      e8: "Seat E8 is available",
      f1: "Seat F1 is available",
      f2: "Seat F2 is available",
      f3: "Seat F3 is available",
      f4: "Seat F4 is available",
      f5: "Seat F5 is available",
      f6: "Seat F6 is available",
      f7: "Seat F7 is available",
      f8: "Seat F8 is available"
    }

   }
   ngOnInit(): void {

   }

   constructor(private productService:ProductServiceService){}

   addProduct()
   {
     console.log(this.product)
     this.productService.addProduct(this.product).subscribe(
       response=>
       {
         console.log(response);
       },
       error=>
       {
         console.log(error);
       }
     )
   }
}
