import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  val:number = 0;

  title = 'Assignment-1';

  product_list:any = [
    {"pname":"iPhone13" , "price":5000 , "category":"Mobiles" , "image":"../assets/iphone.jpg"},
    {"pname":"AC" , "price":4000 , "category":"Appliances" , "image":"../assets/ac.jpg"},
    {"pname":"Laptop" , "price":8000 , "category":"Laptop" , "image":"../assets/laptop.jpg"}
  ];

  show(opt:number){
    this.val = opt;
  }

}
