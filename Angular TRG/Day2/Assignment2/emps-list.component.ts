import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit, OnChanges {

  @Input()
  sortValue:string="";

  sorted_emp_list:Employee[] = [];

  emp_list:Employee[] = [
    {eid:201 , ename:"Saahil" , ejob:"SDEM" , esalary:9000 , edeptno:20},
    {eid:101 , ename:"Dinesh" , ejob:"SDE1" , esalary:1000 , edeptno:10},
    {eid:105 , ename:"Rajat" , ejob:"SDE2" , esalary:2000 , edeptno:10},
    {eid:209 , ename:"Manjul" , ejob:"SDE3" , esalary:5000 , edeptno:10},
    {eid:301 , ename:"Raj" , ejob:"SDET" , esalary:1000 , edeptno:30},
    {eid:300 , ename:"Shivangi" , ejob:"SDET" , esalary:1000 , edeptno:30},
    {eid:305 , ename:"Umang" , ejob:"SDET" , esalary:1000 , edeptno:30}

  ]; 

  constructor() { }
  ngOnChanges(): void {
    if(this.sortValue == ""){
      this.sorted_emp_list = this.emp_list;
    }
    if(this.sortValue == "1"){
      this.sorted_emp_list = this.emp_list.sort((e1,e2) => e1.eid - e2.eid);
    }
    if(this.sortValue == "2"){
      this.sorted_emp_list = this.emp_list.sort((e1,e2) => e1.ename > e2.ename ? 1 : -1);
    }
    if(this.sortValue == "3"){
      this.sorted_emp_list = this.emp_list.sort((e1,e2) => e1.ejob > e2.ejob ? 1 : -1);
    }
    if(this.sortValue == "4"){
      this.sorted_emp_list = this.emp_list.sort((e1,e2) => e1.esalary - e2.esalary);
    }
    if(this.sortValue == "5"){
      this.sorted_emp_list = this.emp_list.sort((e1,e2) => e1.edeptno - e2.edeptno);
    }
  }

  ngOnInit(): void {
    
  }

}

class Employee{
  eid:number = 0;
  ename:string = "";
  ejob:string = "";
  esalary:number = 0;
  edeptno:number = 0;
}
