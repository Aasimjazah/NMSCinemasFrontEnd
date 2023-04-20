import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/MyServices/show.service';

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
      price:"200",
      a1: "available",
      a2: "available",
      a3: "available",
      a4: "available",
      a5: "available",
      a6: "available",
      a7: "available",
      a8: "available",
      b1: "available",
      b2: "available",
      b3: "available",
      b4: "available",
      b5: "available",
      b6: "available",
      b7: "available",
      b8: "available",
      c1: "available",
      c2: "available",
      c3: "available",
      c4: "available",
      c5: "available",
      c6: "available",
      c7: "available",
      c8: "available",
      d1: "available",
      d2: "available",
      d3: "available",
      d4: "available",
      d5: "available",
      d6: "available",
      d7: "available",
      d8: "available",
      e1: "available",
      e2: "available",
      e3: "available",
      e4: "available",
      e5: "available",
      e6: "available",
      e7: "available",
      e8: "available",
      f1: "available",
      f2: "available",
      f3: "available",
      f4: "available",
      f5: "available",
      f6: "available",
      f7: "available",
      f8: "available"
    }


   constructor(private productService: ShowService){}

   publishShow()
   {
     console.log(this.ShowScreen)
     this.productService.addProduct(this.ShowScreen).subscribe(
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
