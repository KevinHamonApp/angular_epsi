import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHerosComponent } from './item-heros.component';

describe('ItemHerosComponent', () => {
  let component: ItemHerosComponent;
  let fixture: ComponentFixture<ItemHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
