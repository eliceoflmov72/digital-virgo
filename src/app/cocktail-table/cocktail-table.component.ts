import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../services/cocktail.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-table',
  imports: [TableModule, CommonModule, FormsModule],
  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent {

  cocktails: any;
  letter: string = '';
  
  get alcoholicCocktailsCount(): number {
    return this.cocktails?.filter((cocktail: any) => cocktail.strAlcoholic === 'Alcoholic').length || 0;
  }
  constructor(
    private cocktailService: CocktailsService
  ) {

  }

  searchByLetter() {
    const letter = this.letter.trim().toLowerCase();
    if (letter.length === 1) {
      this.cocktailService.getCocktailsByFirstLetter(letter).subscribe({
        next: (res) => this.cocktails = res.drinks || [],
        error: () => this.cocktails = []
      });
    } else {
      this.cocktails = [];
    }
  }
}
