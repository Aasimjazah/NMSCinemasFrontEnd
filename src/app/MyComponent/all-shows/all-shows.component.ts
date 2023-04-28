import { Component , OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ShowService } from 'src/app/MyServices/show.service';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit {

  movieName:string="";
  movies:any=
  {
    
  };
  
  constructor(private showService:ShowService){}
  ngOnInit(): void {
      this.showService.getAllMovies().subscribe(response=>
        {
         console.log(response);
         this.movies=response;
        },
        error=>
        {

        });
  }
  
  firebaseConfig = {
    apiKey: "AIzaSyDKczjoS_qmuWtjDOQOCIN8bjYTw-GbEl0",
    authDomain: "kitchenstory-39828.firebaseapp.com",
    projectId: "kitchenstory-39828",
    storageBucket: "kitchenstory-39828.appspot.com",
    messagingSenderId: "818537684504",
    appId: "1:818537684504:web:0c08d2899f13f916236d6d",
    measurementId: "G-7QHEMG3VBT"
  };
  
    // Initialize Firebase
    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
  
    async onFileSelected(event: any,movie:any) {
      console.log("Inside onFileSelcted");
      this.movieName=movie;
      const file: File = event.target.files[0];
      await this.saveImage(file);
    }
  
    async saveImage(file: File) {
      console.log("Inside saveImage");
      const storageRef = getStorage(this.app);
      const imagesRef = ref(storageRef, 'images/' + file.name);
      await uploadBytes(imagesRef, file);
      const url = await getDownloadURL(imagesRef);
      this.showService.addImageUrl(url,this.movieName).subscribe(response=>
        {
           
        },
        error=>
        {
        }
        );
      console.log('Image URL:', url);
    }
}
