import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message'
import { environment } from '../../environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  

  private baseUrl: string = 'http://' + window.location.host + '/api/posts'
  private postUrl: string = 'http://' + window.location.host + '/api/post'

 constructor(private http: HttpClient){ 
 }

 getPosts(): Observable<Message[]>{
   return this.http.get<Message[]>(this.baseUrl)
 }

 newPost(form){
   return this.http.post(this.postUrl, form, httpOptions)
 }
 
}