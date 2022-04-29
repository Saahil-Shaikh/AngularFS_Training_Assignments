import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  from:number  = 0;
  to:number  = 0;


  from_range:number = 0;
  to_range:number = 0;

  public emp_list:any[] = [
    {eid: 1 , ename : "AA" , ejob : "SDEM" , esalary : 1000 , edeptno : 10},
    {eid: 2 , ename : "BB" , ejob : "SWE" , esalary : 9000 , edeptno : 20},
    {eid: 3 , ename : "CC" , ejob : "SWE" , esalary : 3000 , edeptno : 20},
    {eid: 4 , ename : "DD" , ejob : "SDET" , esalary : 6000 , edeptno : 10},
    {eid: 5 , ename : "EE" , ejob : "SDET" , esalary : 4000 , edeptno : 30},
    {eid: 6 , ename : "GG" , ejob : "SME" , esalary : 7000 , edeptno : 30}
  ]

  setValues(){
    this.from = this.from_range;
    this.to = this.to_range;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
