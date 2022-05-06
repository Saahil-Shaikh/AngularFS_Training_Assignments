import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminPanel]'
})
export class AdminPanelDirective implements OnChanges {

  @Input()
  appAdminPanel:string = "";

  admin_users = ["Smith","Scott","Robert","Mark"];

  constructor(private view:ViewContainerRef , private temp:TemplateRef<any>) { 
    
  }
  ngOnChanges(): void {
    if(this.admin_users.includes(this.appAdminPanel)){
      this.view.createEmbeddedView(this.temp);
    }
    else{
      this.view.clear();
    }
  }

}
