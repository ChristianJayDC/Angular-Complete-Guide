import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simpleng Testing lang', 'https://revistanossa.com.br/midias/artigos/Imagens/Filipino_Pork_Adobo-1568724825.jpg'),
    new Recipe('A Test Recipe', 'Simpleng Testing lang', 'https://4.bp.blogspot.com/-LHPeDpZzzqU/VJ0tP1_8BPI/AAAAAAAACmo/4F5a1W6EO38/s1600/107805-filipino-pork-adobo.png')
  ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
