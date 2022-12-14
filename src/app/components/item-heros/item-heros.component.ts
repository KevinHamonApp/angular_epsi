import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-item-heros',
  templateUrl: './item-heros.component.html',
  styleUrls: ['./item-heros.component.scss']
})
export class ItemHerosComponent {
  @Input() hero: Hero={
    id:0,
    name:''  
  };
}
