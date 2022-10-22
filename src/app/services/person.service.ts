import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = environment.URL + 'person/';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> { 
    return this.http.get<Person>(this.url + 'get/profile');
  }
}
