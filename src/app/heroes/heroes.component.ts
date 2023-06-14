// Component is always imported for a component
import { Component } from '@angular/core';
import {Hero} from "../hero";
//Importing the simple HEROES list made somewhere else.
import {HEROES} from "../mock-heroes";


@Component({
  // 'app-heroes' is the element selector for the heroesComponent. It functions like a css selector.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// allways export the component class, so it can be imported elsewhere
export class HeroesComponent {
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes = HEROES;
}
