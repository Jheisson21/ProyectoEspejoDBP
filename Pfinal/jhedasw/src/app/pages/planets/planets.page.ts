import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets:any;
  iconname= 'planet';

  constructor(private obtSwapiServer:SwapiService) { }

  ngOnInit() {
    this.planets = this.obtSwapiServer.getSwapi('planets');
    }

}
