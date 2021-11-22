import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

people:any;
iconname= 'people';

  constructor(private obtServPeople:SwapiService) { }

  ngOnInit() {
    this.people= this.obtServPeople.getSwapi('people');
  }
}
