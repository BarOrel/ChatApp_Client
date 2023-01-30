import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddChatRoomForm } from 'src/app/Models/FormModels/AddChatRoomForm';
import { AuthService } from '../User/Auth/Auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
    ChatId:number = 0;
    ChatData:any;
    BaseUrl:string = "https://localhost:7070/api/ChatRoom/";
  
    private subject = new Subject<any>();


    constructor(private http:HttpClient,private authService:AuthService,private router:Router) { }
    
    get Id(){
      return this.authService.userId();
    }

    GetAll(){
      return this.http.get(this.BaseUrl + this.Id);
    }

    GetChat(id:number){
      return this.http.get(this.BaseUrl+ "GetChat/" + id);
    }
    
    Add(some:any){
      return this.http.post(this.BaseUrl+"Add", some);
    }
    Delete(some:number){
      return this.http.delete(this.BaseUrl+"Delete/" + some);
    }

    chat(){
      return this.ChatId;
    }

    LoadChat(Id:number){
    this.GetChat(Id).subscribe((data:any)=>
    {
       this.ChatData = data;
       this.ChatId = Id
       this.subject.next(this.getClick());
       this.router.navigate(['Chat'])
       console.log(data)
    });
    }

    getClick(){
      return this.subject.asObservable();
    }

    LoadOnlyChat(Id:number){
      this.GetChat(Id).subscribe((data:any)=>
         {
           this.ChatId = Id
           this.ChatData = data;
           console.log(data)
         });}
    }