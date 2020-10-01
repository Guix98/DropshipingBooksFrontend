import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
    console.log('Google Books Service working!');

  }
  private key = 'AIzaSyDWZjhVRbOql-qtNOnKXuS-_2VWtz87mEU';
  private localurl = 'http://localhost:8008/api/v1/';


  getQuery(query: string, params: HttpParams){
    const url = `https://www.googleapis.com/books/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQDKp7phNMvs49SKL4MaEXD1Qd8YaKWeB1RUPet2Rayc614wUJFEKL3hukqDfbpwRD87BkbMgxuYDGQnalM'
    });
    params = new HttpParams().set('key', this.key).set('printType', 'books');
    return this.http.get(url, {params});
  }
  postLogin(user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.localurl + 'security/login', body, {headers}).pipe(map((data:any)=>{
      return data.message;
    }));

  }

}
