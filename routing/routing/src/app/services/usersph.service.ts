import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersphService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
