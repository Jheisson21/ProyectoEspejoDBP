import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { AlbumsInterface } from './albums-interface';

@Component({
  selector: 'Jheisson-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumss: AlbumsInterface[]=[];
  constructor(private albumsService:AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data=>{this.albumss=data;
      console.log(data)});
  }

}
