import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JWTokenDTO } from '../model/jwt-dto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any> { 
    return this.httpClient.post<any>(this.URL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JWTokenDTO> { 
    return this.httpClient.post<JWTokenDTO>(this.URL + 'login', userLogin) 
  }
}
 