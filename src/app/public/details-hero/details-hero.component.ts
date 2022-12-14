import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-details-hero',
  templateUrl: './details-hero.component.html',
  styleUrls: ['./details-hero.component.scss']
})
export class DetailsHeroComponent implements OnInit{

  hero:Hero | undefined;

  constructor(private heroService: HeroService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.heroService.getHero(params['id']).subscribe(
          (data)=> {
            if(data.length>0){
              this.hero=data[0]
            }
            
          }
        )
      }
    )
    
  }

}
