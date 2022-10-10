import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JWTokenDTO } from '../model/jwt-dto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "https://backendhh.herokuapp.com/auth/";

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any> { 
    return this.httpClient.post<any>(this.authURL + "new", newUser)
  }

  public login(userLogin: UserLogin): Observable<JWTokenDTO> { 
    return this.httpClient.post<JWTokenDTO>(this.authURL + "login", userLogin); 
  }
}
 