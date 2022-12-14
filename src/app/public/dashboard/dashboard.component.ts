import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  heros$: Observable<Hero[]> = new Observable<Hero[]>;

  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
    //this.heros = this.heroService.getTopHeroes();
    this.heros$=this.heroService.getTable()
    /*
    .subscribe(
      (data) => this.heros=data
    );*/
  }
  

}
