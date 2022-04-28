import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-1';

  sortOption:string = ""; 

  sortList(value:string){
    this.sortOption = value;
  }

}
