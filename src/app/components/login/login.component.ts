import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false; 
  isLogginFail = false; 
  userLogin!: UserLogin; 
  userName!: string;
  password!: string; 
  roles: string[] = []; 
  errorMsg!: string; 

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void { 
    this.userLogin = new UserLogin(this.userName, this.password); 
    this.authService
      .login(this.userLogin).subscribe(data =>{
        this.isLogged = true;
        this.isLogged = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.userName); 
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
       }, err =>{
          this.isLogged = false; 
          this.isLogginFail = true;
          this.errorMsg = err.error.message;
          console.log(this.errorMsg); 
     }
    )
  }
}
