import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero'
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
    this.heroService.getTable().subscribe(
      (data) => this.heroes=data
    );
  }


}
