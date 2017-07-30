import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() currentPage;
  @Input() totalPages;
  @Input() search;

  iterPages: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.prepareDataToRender();
  }

  ngOnChanges() {
    this.prepareDataToRender();
  }

  prepareDataToRender() {
    this.iterPages = new Array(this.totalPages);
    this.currentPage = Number(this.currentPage);
  }


}
