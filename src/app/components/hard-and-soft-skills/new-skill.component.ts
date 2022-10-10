import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  name: string;
  percentage: number; 


  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  } 

  public onCreate(): void {
    const skill = new Skill(this.name, this.percentage); 
    this.skillService.save(skill).subscribe(
      data => { 
        alert("Skill created"); 
        this.router.navigate([''])
      }, err =>{ 
        alert("Failt to add");
        this.router.navigate(['']);
      }
    )
  }
}
