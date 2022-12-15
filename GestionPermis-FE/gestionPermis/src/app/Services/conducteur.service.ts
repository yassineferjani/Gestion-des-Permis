import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http: HttpClient) {}

    host: String = 'http://127.0.0.1:8080/conducteur'; 

    getConducteurs(): Observable<any> {
      return this.http.get(this.host + '/all');
    }
}
