import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  jobExperience: Experience = null; 

  constructor(private experienceService: ExperienceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data =>{
        this.jobExperience = data;
      }, err => {
        alert("Can't modify experience");
        this.router.navigate(['']);   
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.update(id, this.jobExperience).subscribe(
      data => { 
        this.router.navigate(['']); 
    }, err =>{ 
        alert("Can't modify experience");
        this.router.navigate(['']); 
      } 
    )
  }
}
