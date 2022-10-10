import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = "https://backendhh.herokuapp.com/person/";

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> { 
    return this.http.get<Person>(this.url + 'get/profile');
  }
}
