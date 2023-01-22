import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginModel } from '../Models/User.Model/LoginModel';
import { AuthService } from '../Services/User/Auth/Auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  
  }


  LoginFun(username:string,password:string){
    
    var model = new LoginModel();
    model.Username = username;
    model.Password = password;
    this.authService.Login(model);
    
  }
}
