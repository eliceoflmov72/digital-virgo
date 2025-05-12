import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CocktailsService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css'
})
export class CocktailDetailsComponent implements OnInit {
  @Input() id!: number;
  cocktailData: any;
  visible = true;

  constructor(private cocktailService: CocktailsService) {}

  ngOnInit() {
    if (this.id) {
      this.searchCocktailById(this.id);
    }
  }

  searchCocktailById(cocktailId: number) {
    this.cocktailService.getCocktailById(cocktailId).subscribe({
      next: (response: any) => {
        this.cocktailData = response?.drinks?.[0] || null;
      },
      error: (error: any) => {
        console.error('Error getting cocktail by id', error);
      }
    });
  }
}
