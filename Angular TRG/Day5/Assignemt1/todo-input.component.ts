import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit, OnChanges {

  @Input()
  newtodo:any;

  todolist: any[] = [];

  strike:any;

  constructor() { }

  ngOnChanges(): void {
    this.todolist.push({id : this.todolist.length + 1 , itemName : this.newtodo , isDone : false});
  }

  ngOnInit(): void {

    this.todolist = [{ id: 1, itemName: "Learn Java 8", isDone: false },
    { id: 2, itemName: "Play Games", isDone: false },
    { id: 3, itemName: "Learn React", isDone: false },
  ];

  }

  deleteTodo(index:number){
    this.todolist.splice(index,1);
  }

  updateTodo(index:number){
    let updatedTodo:any = prompt("Enter Updated Todo Task Name");
    this.todolist[index].itemName = updatedTodo;
  }

  deleteDoneTodo(){
    this.todolist = this.todolist.filter(todo => todo.isDone == false);
  }

  deleteAllTasks(){
    this.todolist = [];
  }

}
