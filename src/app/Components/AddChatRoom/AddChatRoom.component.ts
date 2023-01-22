import { Component, OnInit, ElementRef } from '@angular/core';
import { AddChatRoomForm } from 'src/app/Models/FormModels/AddChatRoomForm';
import { UsersListModel } from 'src/app/Models/FormModels/UsersListModel';
import { ChatRoomService } from 'src/app/Services/ChatRoom/ChatRoom.service';
import { UserService } from 'src/app/Services/User/User/User.service';

@Component({
  selector: 'app-AddChatRoom',
  templateUrl: './AddChatRoom.component.html',
  styleUrls: ['./AddChatRoom.component.css'],
})
export class AddChatRoomComponent implements OnInit {
  userList: any = [];
  AddedUsers:any = [];
  form: AddChatRoomForm = new AddChatRoomForm();
  SearchText: any;
  index: any;
  constructor(
    private userService: UserService,
    private chatRoomService:ChatRoomService
  ) {}

  ngOnInit() {
    this.userService.GetAll().subscribe((data) => {
      this.userList = data;
      console.log(data);
    });
  }

  AddUsers(User:any){
    if (!this.AddedUsers.includes(User)){
      this.AddedUsers.push(User);
    }
      
    console.log(this.AddedUsers)

  }
  RemoveUser(User:any){
      this.AddedUsers.splice(User,1)
    


  }
  AddChatRoom(Title: string , Description: string , ImageUrl:string) {
    if (Title !=''){
    this.form.Title = Title;
    this.form.Description = Description;
    this.form.ImgUrl = ImageUrl;
    this.form.Users = this.AddedUsers;
    this.form.UserId = localStorage.getItem('UserId')!;
      if (this.form.Users.length > 0){   
        this.chatRoomService.Add(this.form).subscribe((data)=>{console.log(data)})
      }
      else{return alert("Pls Choose Users");}
    }
 
    else{return alert("Cannot leave Title Empty");}
  }
}
