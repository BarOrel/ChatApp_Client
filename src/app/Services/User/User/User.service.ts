import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/Auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
BaseUrl:string = "https://localhost:7070/api/User/";
constructor(private http:HttpClient,private authService:AuthService) { }
get Id(){
  return this.authService.userId();
}
GetAll(){
  console.log(this.Id)
  return this.http.get(this.BaseUrl+ this.Id );
}

}
