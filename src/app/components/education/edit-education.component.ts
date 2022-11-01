import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;

  constructor(private educationService: EducationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      data => { 
        this.education = data;
      }, err => { 
        alert("Error, can't update");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.educationService.update(id, this.education).subscribe(
      data => { 
        this.router.navigate(['']);
    }, err => { 
        alert("Can't modify information");
        this.router.navigate(['']);
      }
    )
  }

}
