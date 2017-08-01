import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() product;
  @Input() isDeleted = false;

  constructor() { }

  ngOnInit() {
  }

}
