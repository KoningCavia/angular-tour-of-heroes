// Component is always imported for a component
import { Component } from '@angular/core';
import {Hero} from "../hero";
//Importing the simple HEROES list made somewhere else.
import { HeroService } from "../hero.service";


@Component({
  // 'app-heroes' is the element selector for the heroesComponent. It functions like a css selector.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// allways export the component class, so it can be imported elsewhere
export class HeroesComponent {
  //de heroesComponent class is dus niet de hero class met diens variabelen. die staat in de hero.ts interface beschreven. een Component is een frontend view, een interface is functioneel een klasse bescrhijving
  //that being said. dit zijjn wel de variabelen die deze view nodig heeft "nameVariable?: nameClass".
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

// this method uses the subscribe part to deal with asynchronous calls which return an observable object, rather than just an object.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  //basically on init, call the method getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

}
