import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Health } from './health';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private healthURL: string = 'http://' + window.location.host + '/api/health'

  constructor(private http: HttpClient){ 
  }

  getHealth(){
    return this.http.get(this.healthURL, httpOptions)
  }

}
