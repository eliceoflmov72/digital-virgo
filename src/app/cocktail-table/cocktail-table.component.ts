import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-table',
  imports: [],
  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent implements OnInit{

  cocktails: any;
  constructor(
    private cocktailService: CocktailsService
  ) {

  }
  ngOnInit() {
    this.cocktailService.getAllCocktails().subscribe(
      {
        next: (response) => {
          this.cocktails = response.drinks || [];
          console.log(this.cocktails)
        },
        error: (error) => {
          console.error('Error al obtener cócteles', error)
        }
      }
    )

    console.log(this.cocktails)
  }


}
