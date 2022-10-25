import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = environment.URL + 'person/';

  constructor(private httpClient: HttpClient) { }

  public getPerson(): Observable<Person> { 
    return this.httpClient.get<Person>(this.URL + 'get/profile');
  }
}
