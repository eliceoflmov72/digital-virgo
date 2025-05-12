import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailTableComponent } from "./cocktail-table/cocktail-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CocktailTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-virgo';
}
