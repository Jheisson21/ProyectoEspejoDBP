import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-starships',
  templateUrl: './descripcion-starships.page.html',
  styleUrls: ['./descripcion-starships.page.scss'],
})
export class DescripcionStarshipsPage implements OnInit {

  starships:any;

  constructor(private activateroute: ActivatedRoute,private miSwapiServ: SwapiService) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe((params)=>{
    let id=params.get('id');
    console.log(id);

    this.starships = this.miSwapiServ.getSwapi(`starships/${id}`).subscribe(data=>{
      this.starships = data;
      console.log(data);
    });

  });
  }

}
