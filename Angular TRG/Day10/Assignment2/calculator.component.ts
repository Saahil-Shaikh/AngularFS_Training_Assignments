import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pname:string = "";
  unit_price:string = "";
  qty:number = 1;
  result:any;
  

  calc():void {
    //this.result = this.qty * this.unit_price;
  }

}
