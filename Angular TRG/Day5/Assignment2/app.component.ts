import { Component } from '@angular/core';
import  {HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-2';

  url:string = "https://reqres.in/api/users";
  user_data:any = [];

    constructor( public  httpObj:HttpClient )
		{
      
		}

    getData(){
      this.httpObj.get(this.url).subscribe((result:any)=>this.user_data = result["data"]);
    }

}
