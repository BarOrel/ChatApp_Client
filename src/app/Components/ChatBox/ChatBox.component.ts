import { Component, OnInit , Input, ElementRef, ViewChild, AfterViewChecked} from '@angular/core';
import { ChatRoomService } from 'src/app/Services/ChatRoom/ChatRoom.service';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageForm } from 'src/app/Models/FormModels/MessageForm';
import { AuthService } from 'src/app/Services/User/Auth/Auth.service';
import { MessageService } from 'src/app/Services/Message/Message.service';
@Component({
  selector: 'app-ChatBox',
  templateUrl: './ChatBox.component.html',
  styleUrls: ['./ChatBox.component.css']
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollBottom')
  private scrollBottom!: ElementRef;


  chat:any;
  messages:any;
  index:number = 0;
  InputText = ''
  pic: any;
  
  get Username():string{
    return this.authService.Username();
  }
  model:MessageForm = new MessageForm();

  
  
  
  

  constructor(private chatService:ChatRoomService,private router:Router,private authService:AuthService,private messageService:MessageService) {
    this.Load()
    interval(1000)
    .subscribe(() => {
      this.Load();
      
    });
  }
  clickEventSubscription = this.chatService.getClick().subscribe(()=>
  {this.Load();}) 

 
  ngOnInit() {
    
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
   } 

   scrollToBottom(): void {
    try {
        this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch(err) { }
}


  Load(){
    if(this.chatService.ChatId != 0){
      this.chat = this.chatService.ChatData;
      this.chatService.LoadOnlyChat(this.chat.chat.id);
      this.index++;
      
    }  
    else {  this.router.navigate([''])}
  }

  setDefaultPic() {
    this.pic = "..assets/person.png";
  }
  
  SendMessage(MessageContent:any,ChatId:any)
  {
    if(MessageContent != ' '){
      
    this.model.ChatId = ChatId;
    this.model.MessageContent = MessageContent;
    this.model.UserId = this.authService.Username();
    this.messageService.Add(this.model).subscribe((data)=>{
  
    this.chatService.LoadChat(ChatId)
    
    });
    this.InputText = ' ';
    }
    else { alert("Message Cannnot Be Empty.")}
  }
  

  DeleteChat(ChatId:number){
    this.chatService.Delete(ChatId).subscribe(()=>{})
    alert('Chat has been deleted')
    this.router.navigate([''])
  }

    
}
