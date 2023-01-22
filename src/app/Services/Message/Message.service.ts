import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
BaseUrl:string = "https://localhost:7070/api/Message/";
constructor(private http:HttpClient) { }


Add(some:any){
  return this.http.post(this.BaseUrl+"Add", some);
}


}
