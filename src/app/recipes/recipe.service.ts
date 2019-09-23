import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Avocado Salad', 
        'Healthy & Delicious', 
        'https://image.shutterstock.com/z/stock-photo-healthy-salad-bowl-with-quinoa-tomatoes-chicken-avocado-lime-and-mixed-greens-lettuce-parsley-521741356.jpg',
        [
            new Ingredient('Avocado', 2),
            new Ingredient('Chicken Breast', 1)
        ]),
        new Recipe('Oil Basket', 
        'Looks like oil!', 
        'https://cdn.stocksnap.io/img-thumbs/960w/5BRFCY2GAG.jpg',
        [
            new Ingredient('Olive Oil', 1),
            new Ingredient('Perello', 2)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}