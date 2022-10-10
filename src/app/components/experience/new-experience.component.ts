import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  experienceName: string = '';
  experienceDescription: string = '';
 
  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experience(this.experienceName, this.experienceDescription);
    this.experienceService.save(expe).subscribe(
      data => {alert("Experience added"); 
    this.router.navigate(['']);
    }, err =>{ 
      alert("Fail");
      this.router.navigate(['']);
    }
    ) 
  }

}
