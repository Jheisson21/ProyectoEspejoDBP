import { Injectable } from '@angular/core';

// importación de app.module y del environment

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  //utiliza readonly porque const no funciona
readonly SWAPIURL= environment.SWAPIURL 
 
//Creación del HHTP client : httpClient2

  constructor(private http2:HttpClient) { }

 // obtener datos 

 getSwapi(path){

  return this.http2.get(`${this.SWAPIURL}${path}`)

}

}
