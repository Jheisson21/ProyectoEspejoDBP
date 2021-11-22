import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { InfoComponent } from './component/info/info.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { PhotosComponent } from './component/photos/photos.component';
import { AlbumsComponent } from './component/albums/albums.component';
import { PostsComponent } from './component/posts/posts.component'; //Importación de las API de Angular
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    InfoComponent,
    UsersComponent,
    PhotosComponent,
    AlbumsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Conexión con Angular para extraer APIs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
