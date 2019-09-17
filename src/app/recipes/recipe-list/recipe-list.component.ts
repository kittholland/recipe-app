import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://image.shutterstock.com/z/stock-photo-healthy-salad-bowl-with-quinoa-tomatoes-chicken-avocado-lime-and-mixed-greens-lettuce-parsley-521741356.jpg'),
    new Recipe('Another recipe', 'This is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/5BRFCY2GAG.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
