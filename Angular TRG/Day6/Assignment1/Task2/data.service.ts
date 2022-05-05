import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = "http://localhost:3500/emp/";

  constructor(private httpObj:HttpClient) { }

  public getAllEmployees() : Observable<any>{

    return this.httpObj.get(this.url);

  }

  public addEmployee(empObj:any){

    return this.httpObj.post(this.url,empObj);

  }

  public updateEmployee(empObj:any){

    return this.httpObj.put(this.url + empObj.empno , empObj);

  }

  public deleteEmployee(empno:number){

    return this.httpObj.delete(this.url + empno);

  }

  public getEmployeeByJob(job:string) : Observable<any>{
    return this.httpObj.get<any[]>(this.url).pipe(
      map(
        res=>{
          return res.filter(item => item.job == job)
        }
      )
    )
  }

  public getManagerByDept(deptno:number) : Observable<any>{
    return this.httpObj.get<any[]>(this.url).pipe(
      map(
        res=>{
          return res.filter(item => item.deptno == deptno && item.job == "SDEM")
        }
      )
    )
  }

  public getEmployeeNameJob() : Observable<any>{

    return this.httpObj.get<any[]>(this.url).pipe(
      map(
        res=>{
          return res.map(
            item => { return {empname : item.empname , job : item.job} }
          )
        }
      )
    )  
  }
  
  public getEmployeeNotInDept() : Observable<any>{

    return this.httpObj.get<any[]>(this.url).pipe(
      map(
        res => {
          return res.filter(item => item.deptno != 10)
        }
      )
    )

  }

  public getSortedEmployees() : Observable<any>{

    return this.httpObj.get<any[]>(this.url).pipe(
      map(
        res => {
          return res.sort((a,b)=> a.sal - b.sal);
        }
      )
    )

  }


}
