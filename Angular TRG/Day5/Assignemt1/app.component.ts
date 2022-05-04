import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-1';

  todoinput:string = "";
  todovalue:string = "";

  addNewTodo(){
    this.todovalue = this.todoinput;
  }

}
