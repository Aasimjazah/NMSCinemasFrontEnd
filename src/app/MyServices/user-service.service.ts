import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl:string="http://localhost:1111"
  constructor(private http:HttpClient) { }

  addUser(data:any)
  {
    return this.http.post<any>(`${this.baseUrl}/addUser`,data);
  }

  SignIn(data:any,apiUrl:any)
  {
    return this.http.post<any>(apiUrl,data)
  }

  getAllUSers()
  {
    return this.http.get<any>(`${this.baseUrl}/getAllUsers`);
  }

  getUserbyEmail(email:any)
  {
    console.log("getUserByEmail calling");
    return this.http.get<any>(`${this.baseUrl}/getUser/`+email);

  }
}
