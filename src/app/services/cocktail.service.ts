import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CocktailsService {
    constructor(private http: HttpClient) { }

    getCocktailsByFirstLetter(letter: string): Observable<any> {
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    }

    getCocktailByCategory(category: string) {
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    }

    getCategories(): Observable<any> {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    }

    getCocktailById(id: number): Observable<any> {
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    }

    getRandomCocktail(): Observable<any> {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php?rand=${Math.random()}`;
        return this.http.get(url);
      }
      





}