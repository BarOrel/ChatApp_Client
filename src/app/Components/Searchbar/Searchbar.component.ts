import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Searchbar',
  templateUrl: './Searchbar.component.html',
  styleUrls: ['./Searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  SearchText: any;
  constructor() { }

  ngOnInit() {
  }

}
