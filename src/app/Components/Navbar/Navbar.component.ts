import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/User/Auth/Auth.service';


@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get loggedIn(){
    return this.authService.isLoggedIn();
  }
  get Username(){
    return this.authService.Username();
  }

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  Logout(){
    this.authService.Logout();
    
  }

}
