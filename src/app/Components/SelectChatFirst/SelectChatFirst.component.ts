import { Component, OnInit ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-SelectChatFirst',
  templateUrl: './SelectChatFirst.component.html',
  styleUrls: ['./SelectChatFirst.component.css']
})
export class SelectChatFirstComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'rgb(26, 151, 141)';
  }

}
