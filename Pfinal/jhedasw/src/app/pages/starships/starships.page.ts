import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

starships:any;
iconname= 'rocket';

  constructor(private obtServStarships:SwapiService) { }

  ngOnInit() {
    this.starships= this.obtServStarships.getSwapi('starships');
  }
}
