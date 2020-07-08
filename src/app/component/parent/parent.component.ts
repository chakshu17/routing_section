import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  dateToday: Date;
  users:IUser[];
  filterIdType:string = '';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dateToday = new Date();
    this.users = this.userService.getusers();

  }
  addUser(){
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacob',
      email:'jacod@gmail.com'
    });
  }

}
