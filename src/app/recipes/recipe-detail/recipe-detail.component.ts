import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}
