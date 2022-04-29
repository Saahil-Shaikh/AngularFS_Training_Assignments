import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  property:boolean = false;

  public user_list:any[] = [
    {username:"AA" , location:"Mumbai" , password:"123"},
    {username:"BB" , location:"Pune" , password:"456"},
    {username:"CC" , location:"Gurgaon" , password:"766"},
    {username:"DD" , location:"Panvel" , password:"111"},
    {username:"EE" , location:"Gurugram" , password:"222"},
    {username:"FF" , location:"Nashik" , password:"666"},
    {username:"GG" , location:"Hyd" , password:"888"},
    {username:"HH" , location:"Chennai" , password:"128"},
    {username:"II" , location:"Bangalore" , password:"128"},
    {username:"JJ" , location:"Airoli" , password:"110"},
    {username:"II" , location:"Bangalore" , password:"128"},
    {username:"JJ" , location:"Airoli" , password:"110"},
    {username:"II" , location:"Bangalore" , password:"128"},
    {username:"JJ" , location:"Airoli" , password:"110"},
    {username:"II" , location:"Bangalore" , password:"128"},
    {username:"JJ" , location:"Airoli" , password:"110"},
  ]

  public emp_list:any[] = [
    {srno:"1" , name:"AA" , grade:"1"},
    {srno:"2" , name:"BB" , grade:"3"},
    {srno:"3" , name:"CC" , grade:"4"},
    {srno:"4" , name:"DD" , grade:"2"},
    {srno:"5" , name:"EE" , grade:"1"},
    {srno:"6" , name:"FF" , grade:"3"},
    {srno:"7" , name:"GG" , grade:"2"},
    {srno:"8" , name:"HH" , grade:"4"},
    {srno:"9" , name:"II" , grade:"1"}
  ]

  start:number = 0;
  end:number = 4;

  nextItems_click()
    {
      if(this.end >= this.user_list.length  ){
      
        this.property=true;
  
      }
      else{
        this.start = this.end;
        this.end = this.end + 4;
      }
    }

}
