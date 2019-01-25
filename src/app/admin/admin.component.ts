import { UserService } from './../services/user.service';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Dish, User, Dictionary } from '../entities';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;
  dish: Dish;
  users: User[];


  constructor(private httpService: HttpService, private userService: UserService,
    public dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(users => this.users = users);
  }
}
