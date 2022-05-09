import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  filter_product:any[] = [];
  product_list:any[] = [
    {"pname":"Iphone 12" , "category":"Mobiles" , "price":6000},
    {"pname":"Samsung S22" , "category":"Mobiles" , "price":9000},
    {"pname":"Oneplus" , "category":"Mobiles" , "price":2000},
    {"pname":"Asus ROG" , "category":"Laptops" , "price":9000},
    {"pname":"Lenovo Ideapad" , "category":"Laptops" , "price":6000},
    {"pname":"Nike Air Jordans" , "category":"Fashion" , "price":500},
    {"pname":"Hoodies" , "category":"Fashion" , "price":200}
  ];

  constructor(private  route:ActivatedRoute){ }

  ngOnInit(): void {

    let category = this.route.snapshot.params["category"];
    alert(category);
    this.filter_product = this.product_list.filter(item=>item.category == category);

  }

}
