import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostService } from 'src/app/services/post.service';
import { AlbumsInterface } from '../albums/albums-interface';
import { PostsInterface } from './posts-interface';

@Component({
  selector: 'Jheisson-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postss: PostsInterface[]=[];

  constructor(private PostsService:PostService) { }

  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(data=>{this.postss=data;
      console.log(data)});
  }

}

