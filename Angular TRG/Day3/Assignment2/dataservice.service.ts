import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

   emp_list:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":8000},
    {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600},
    {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450}
    ];

    addEmp(empObj:any){
      this.emp_list.push(empObj);
    }

    removeEmp(empno:number){
      const index = this.emp_list.findIndex(item=>item.empno == empno);
      this.emp_list.splice(index,1);
      this.showEmp();
      
    }

    showEmp(){
      console.log(this.emp_list);
    }

}
