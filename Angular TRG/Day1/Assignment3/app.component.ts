 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-3';

  pname:string = "";
  unit_price:any;
  qty:any;
  result:any;
  

  calc():void {
    this.result = this.qty * this.unit_price;
  }
}
