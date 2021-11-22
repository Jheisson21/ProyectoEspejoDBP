import { Component, OnInit } from '@angular/core';
import { UsersphService } from 'src/app/services/usersph.service';
import { UserInterface } from './user-interface';

@Component({
  selector: 'Jheisson-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

userss: UserInterface[]=[];

  constructor(private usersService:UsersphService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data=>{
      this.userss=data;
      console.log(data.users)});
  }

}
