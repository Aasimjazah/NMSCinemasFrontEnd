import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  getAllMovies() {
    return this.http.get<any>(`${this.baseUrl}/getAllMovie`);
  }
  private baseUrl:string="http://localhost:4444";
  constructor(private http:HttpClient) { }


  addProduct(data:any)
  {
    return this.http.post(`${this.baseUrl}/addShow`,data);
  }

  addImageUrl(url:any,productId:any)
  {
    return this.http.put(`${this.baseUrl}/uploadImage/`+productId,url);
  }

  getProductById(id:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getProductById/`+id);
  }

  getByMovieName(search:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getByMovieName/`+search);
  }

  getShowByMovie(movieName:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getShowByMovieName/`+movieName);
  }

  updateShowById(show:any)
  {
    console.log(show)
    return this.http.post<any>(`${this.baseUrl}/updateShowById`,show);
  }

  addBooking(ticketBooking:any)
  {
    return this.http.post<any>(`${this.baseUrl}/addBooking`,ticketBooking);
  }

  getTicketsByEmail(email:any)
  {
   return this.http.get<any>(`${this.baseUrl}/getTicketsByEmail/`+email);
  }

  getMovieByLanguage(language:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getMovieByLanguage/`+language);
  }

  getAllShows()
  {
     return this.http.get<any>(`${this.baseUrl}/getAllShows`);
  }

  changeShowStatusById(id:any, status:any)
  {
    console.log(id)
    return this.http.post<any>(`${this.baseUrl}/changeShowStatus/`+id,status);
  }
}
