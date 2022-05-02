import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/models/friends';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends_list:Friend[] = [
    {name:"Mr Green"},
    {name:"Mr Blue"},
    {name:"Mr Yellow"},
    {name:"Mr White"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
