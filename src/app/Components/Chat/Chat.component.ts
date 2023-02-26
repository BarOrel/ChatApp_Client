import { Component, ElementRef, EventEmitter, HostListener, OnInit ,Output, ViewChild} from '@angular/core';
import { Route, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { ChatRoomService } from 'src/app/Services/ChatRoom/ChatRoom.service';

@Component({
  selector: 'app-Chat',
  templateUrl: './Chat.component.html',
  styleUrls: ['./Chat.component.css']
})
export class ChatComponent implements OnInit {
  ChatRoomList: any;
  constructor(private service:ChatRoomService,private router:Router) { 
  }
 
  
  ngOnInit() {
    this.LoadChatRooms()
    interval(7000)
    .subscribe(() => {
      this.LoadChatRooms()
  });
  }

  LoadChatRooms(){
    this.service.GetAll().subscribe((data)=> {
      if(data){
      this.ChatRoomList = data;
     
    }})
  }

  OnClickLoadChat(Id:number){
    this.service.LoadChat(Id);
  }

}
