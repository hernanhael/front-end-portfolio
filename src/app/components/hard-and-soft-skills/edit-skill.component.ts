import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private skillService: SkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params[''];
    this.skillService.detail(id).subscribe(
      data => { 
        this.skill = data;
      }, err => { 
        alert("Erorr to edit");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate() { 
    const id = this.activatedRouter.snapshot.params['id']; 
    this.skillService.update(id, this.skill).subscribe(
      data => { 
        this.router.navigate(['']);
      }, err => { 
        alert("Error to edit");
        this.router.navigate(['']);
      }
    )
  }

}
