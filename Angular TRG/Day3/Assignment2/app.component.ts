import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-2';

  eid:number = 0;
  ename:string = "";
  ejob:string = "";
  esalary:number = 0;

  new_emp:any;

  constructor(public _dataservice:DataserviceService){
    
  }

  add(){
    this.new_emp = {"empno":this.eid,"ename":this.ename,"job":this.ejob,"sal":this.esalary};
    this._dataservice.addEmp(this.new_emp);
    this._dataservice.showEmp();
  }

  remove(){
    this._dataservice.removeEmp(this.eid);
  }



}
