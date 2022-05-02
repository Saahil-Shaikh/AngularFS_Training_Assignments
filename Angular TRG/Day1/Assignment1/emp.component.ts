import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  public emp_id:number = 101;
  public emp_name:string = "Saahil";
  public emp_job:string = "SWE";
  public emp_salary:number = 20000;
  public dept_id:number = 201;

}
