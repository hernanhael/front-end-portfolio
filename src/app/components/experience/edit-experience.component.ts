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
  experience: Experience = null; 

  constructor(private experienceService: ExperienceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data =>{
        this.experience = data;
      }, err => {
        alert("Can't modify experience");
        this.router.navigate(['']);   
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(
      data => { 
        this.router.navigate(['']); 
    }, err => { 
        alert("Can't modify experience");
        this.router.navigate(['']); 
      } 
    )
  }
}
