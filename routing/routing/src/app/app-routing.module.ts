import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './component/albums/albums.component';
import { HomeComponent } from './component/home/home.component';
import { InfoComponent } from './component/info/info.component';
import { PhotosComponent } from './component/photos/photos.component';
import { PostsComponent } from './component/posts/posts.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'info',component:InfoComponent},
  {path:'usuarios', component:UsersComponent},
  {path:'photos', component:PhotosComponent},
  {path:'album', component:AlbumsComponent},
  {path:'posts', component:PostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
