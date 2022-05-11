import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  item: any= {};

  @Output() onremoveprod = new EventEmitter<number>();

  public removeprod(dno: number)
  {
  // event emitting
    this.onremoveprod.emit(dno);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
