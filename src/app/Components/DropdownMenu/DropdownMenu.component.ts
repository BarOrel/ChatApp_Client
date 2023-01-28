import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/User/Auth/Auth.service';

@Component({
  selector: 'app-DropdownMenu',
  templateUrl: './DropdownMenu.component.html',
  styleUrls: ['./DropdownMenu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  Logout(){
    this.authService.Logout();
    
  }
}
