import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStudents(): Promise<any> {
    return this.http.get('/assets/json/test.data.json').toPromise();
  }
}
