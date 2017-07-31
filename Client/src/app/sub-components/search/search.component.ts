import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {
  }

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Input() query;

  ngOnInit() {
  }

  onFormSubmit() {
    this.onSearch.emit(this.query);
  }
}
