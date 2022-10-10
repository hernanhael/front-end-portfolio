import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experience[] = [];
  
  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.addExperience();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else { 
      this.isLogged = false;
    }
  }
 

  addExperience():void { 
    this.experienceService.list().subscribe(data => {this.expe = data;})
  } 

  delete(id?: number){ 
    if(id != undefined){
      this.experienceService.delete(id).subscribe(
        data => { 
          this.addExperience();
        }, err => {
          alert("Can't delete experience");
        }
      )
    }
  }
}