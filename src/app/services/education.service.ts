import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = 'https://backendhh.herokuapp.com/education/';

  constructor(private httpClient: HttpClient) { } 

  public list(): Observable<Education[]> { 
    return this.httpClient.get<Education[]> (this.URL + 'list');
  }

  public detail(id: number): Observable<Education> { 
    return this.httpClient.get<Education>(this.URL + `detail/${id}`);
  } 

  public save(education: Education) { 
    return this.httpClient.post<any>(this.URL + 'create', education);
  } 

  public update(id: number, education: Education) { 
    return this.httpClient.put<any>(this.URL + `update/${id}`, education);
  }
  
  public delete(id: number): Observable<any> { 
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
