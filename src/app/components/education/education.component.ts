import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  isLogged = false; 

  constructor(private educationService: EducationService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.addEducation();
    if(this.tokenService.getToken()) { 
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  } 

  addEducation(): void { 
    this.educationService.list().subscribe(
      data => { 
        this.education = data;
      }
    )
  }

  delete(id?: number) {
    if(id != undefined) {
      this.educationService.delete(id).subscribe(
        data => { 
          this.addEducation();
        }, err => {
          alert("Can't delete");
        }
      )
    }
  }
}
