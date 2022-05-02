import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod_list:ProductDetails[] = [
    {pid : 1 , pname : "iPhone12" , price : 60000 , category : "Mobiles" , qty : 10},
    {pid : 2 , pname : "Voltas AC" , price : 30000 , category : "Appliances" , qty : 1},
    {pid : 3 , pname : "Air Jordans" , price : 10000 , category : "Fashion" , qty : 100}
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
