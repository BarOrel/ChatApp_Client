import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'rgb(26, 151, 141)';
  }

}
