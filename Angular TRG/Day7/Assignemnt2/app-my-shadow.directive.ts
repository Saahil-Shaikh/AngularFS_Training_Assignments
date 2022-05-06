import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppMyShadow]'
})
export class AppMyShadowDirective implements OnInit {

  @Input()
  appAppMyShadow:string  = "";

  constructor(private _element:ElementRef) {

   }

  ngOnInit(): void {
    if(this.appAppMyShadow == ""){
      this.appAppMyShadow = "red";
    }
    this._element.nativeElement.style.color = this.appAppMyShadow;
  }



}
