import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from 'src/app/models/Hero'
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]> = new Observable();
  
  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
    this.heroes=this.heroService.getHeroes();
  }


}
