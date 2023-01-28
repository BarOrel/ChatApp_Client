import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  index:boolean = false
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  ChangeIndex(){
    if(this.index){
      this.index  = false 
    }
    else {this.index = true}

  }
}
