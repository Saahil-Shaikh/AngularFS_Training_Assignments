import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  product_name:string = "";
  price:any = 0;
  quantity:any = 1;
  result:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  
  

  calc():void {
    this.result ="Total Amount : " + this.price*this.quantity;
  }

}
