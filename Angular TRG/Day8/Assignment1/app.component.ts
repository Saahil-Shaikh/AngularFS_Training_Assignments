import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router) { }

  user_id:string = "";
  password:string = "";

  title = 'Assignment-1';

  submit_click(){

    if(this.user_id == "user" && this.password == "user"){
      this._router.navigate(['home']);
    }

  }
}
