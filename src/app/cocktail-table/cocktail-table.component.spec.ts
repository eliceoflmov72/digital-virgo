import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailTableComponent } from './cocktail-table.component';

describe('CocktailTableComponent', () => {
  let component: CocktailTableComponent;
  let fixture: ComponentFixture<CocktailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CocktailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
