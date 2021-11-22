import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-people',
  templateUrl: './descripcion-people.page.html',
  styleUrls: ['./descripcion-people.page.scss'],
})
export class DescripcionPeoplePage implements OnInit {

  people:any;

  constructor(private activateroute: ActivatedRoute,private miSwapiServ: SwapiService) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe((params)=>{
    let id=params.get('id');
    console.log(id);
  
    this.people = this.miSwapiServ.getSwapi(`people/${id}`).subscribe(data=>{
      this.people = data;
      console.log(data);
      });
  
    });


  }

}
