import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {
  skill: Skill[] = []; 

  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void { 
    this.chargeSkill(); 
    if(this.tokenService.getToken()) { 
      this.isLogged = true; 
    } else { 
      this.isLogged = false;
    }
  }

  chargeSkill(): void { 
    this.skillService.list().subscribe(
      data => { 
        this.skill = data;
      }
    )
  }

  delete(id: number) { 
    if(id != undefined) { 
      this.skillService.delete(id).subscribe(
        data => { 
          this.chargeSkill();
        }, err => { 
          alert("can't charge skills");
        }
      )
    }
  }
}
