import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { PhotosInterface } from './photos-interface';

@Component({
  selector: 'Jheisson-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoss: PhotosInterface[]=[];

  constructor(private photosService:PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(data=>{this.photoss=data;
      console.log(data)});
  }

}
