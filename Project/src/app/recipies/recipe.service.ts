import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simpleng Testing lang', 'https://revistanossa.com.br/midias/artigos/Imagens/Filipino_Pork_Adobo-1568724825.jpg'),
    new Recipe('A Test Recipe', 'Simpleng Testing lang', 'https://4.bp.blogspot.com/-LHPeDpZzzqU/VJ0tP1_8BPI/AAAAAAAACmo/4F5a1W6EO38/s1600/107805-filipino-pork-adobo.png')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
