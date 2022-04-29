import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input()
  type:string="";

  prod_filter:Products[]=[];

  public prodlist:Products[] = [
    {pid:1 , pname:"iPhone12", price:100 , category:"Mobile"},
    {pid:2 , pname:"MotoG66", price:100 , category:"Mobile"},
    {pid:3 , pname:"AC", price:200 , category:"Appliance"},
    {pid:4 , pname:"Refridgerator", price:400 , category:"Appliance"},
    {pid:5 , pname:"Shoes", price:50 , category:"Fashion"},
    {pid:6 , pname:"Shirts", price:100 , category:"Fashion"},
    {pid:7 , pname:"PS5", price:500 , category:"Gaming"},
    {pid:8 , pname:"GPU", price:1000 , category:"Gaming"}
  ];

  

  ngOnInit(): void {
    this.prod_filter = this.prodlist.filter(p => p.category==this.type);
  }
}

class Products{
  pid:number = 0;
  pname:string = "";
  price:number = 0;
  category:string = "";
}
