// Component is always imported for a component
import { Component } from '@angular/core';


@Component({
  // 'app-heroes' is the element selector for the heroesComponent. It functions like a css selector.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// allways export the component class, so it can be imported elsewhere
export class HeroesComponent {
  hero = 'windstorm';

}
