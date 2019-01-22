import { Component } from '@angular/core';
import { Task } from './models/task.model'
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'super-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngan and Chris make an angular thing';
  currentTime = new Date();
  currentFocus: string = 'Angular Homework';
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year:number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course.');
    new Task('Begin brainstorming possible JS group projects');
    new Task('Add README file to last few Angular repos on GitHub');
  ];
  currentRecipes: string = 'Here are our recipes';
  recipes : Recipe[] = [
    new Recipe('brownies',['sugar','chocolate','milk'],['mix','bake','cut']);
    new Recipe('pizza',['flour','cheese','pepperoni'],['mix','bake','cut piza into slices']);

  ]

}
