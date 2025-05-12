import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../services/cocktail.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CocktailDetailsComponent } from '../cocktail-details/cocktail-details.component';

@Component({
  selector: 'app-cocktail-table',
  imports: [TableModule, CommonModule, FormsModule, DialogModule, CocktailDetailsComponent],
  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent implements OnInit {
  cocktails: any;
  letter: string = '';
  category: string = '';
  categories: string[] = [];
  showDialog: boolean = false
  selectedId: number | undefined;

  get alcoholicCocktailsCount(): number {
    return this.cocktails.filter((cocktail: any) => cocktail.strAlcoholic === 'Alcoholic').length || 0;
  }

  openDialog(id: number) {
    this.selectedId = id
    this.showDialog = true;
  }

  constructor(
    private cocktailService: CocktailsService
  ) {

  }

  ngOnInit(): void {
    this.cocktailService.getCategories()
      .subscribe({
        next: (response: any) => {
          this.categories = response.drinks.map((cat: any) => cat.strCategory);
        },
        error: () => {
          this.categories = [];
        }
      });

  }

  searchByLetter() {
    const letter = this.letter.trim().toLowerCase();
    if (letter.length === 1) {
      this.cocktailService.getCocktailsByFirstLetter(letter)
        .subscribe({
          next: (response) => this.cocktails = response.drinks || [],
          error: (error: any) => {
            console.error('Error getting cocktail by letter', error);
          }
        });
    } else {
      this.cocktails = [];
    }
  }

  searchByCategory() {
    this.cocktails = [];

    if (!this.category) return;

    this.cocktailService.getCocktailByCategory(this.category)
      .subscribe((response: any) => {
        response.drinks?.forEach((data: any) => {
          this.cocktailService
            .getCocktailById(data.idDrink)
            .subscribe((concrete: any) => {
              const concrete_cocktail = concrete.drinks?.[0];
              this.cocktails.push(concrete_cocktail);
            });
        });
      });
  }

  getRandomCocktail() {
    this.cocktails = []
    this.cocktailService.getRandomCocktail().subscribe({
      next: (response: any) => {
        this.selectedId = response.drinks[0].idDrink;
        this.showDialog = true;
      },
      error: () => console.error('Error obtaining aleatory cocktail')
    });
  }







}
