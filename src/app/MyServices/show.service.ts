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

  getProducts()
  {
    return this.http.get<any>(`${this.baseUrl}/getProducts`);
  }

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

  getNameOrCategory(search:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getNameOrCategory/`+search);
  }

  getShowByMovie(movieName:any)
  {
    return this.http.get<any>(`${this.baseUrl}/getShowByMovieName/`+movieName);
  }
}
