import { Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailTableComponent } from './cocktail-table/cocktail-table.component';

export const routes: Routes = [
    { path: '', component: CocktailTableComponent },
    { path: 'cocktail/:id', component: CocktailDetailsComponent },
];
