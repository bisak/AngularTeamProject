import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  constructor() { }

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  onFormSubmit(){
    this.onSearch.emit(this.query)
  }
}
