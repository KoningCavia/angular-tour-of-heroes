import { Injectable } from '@angular/core';
import { Hero} from "./hero";
import { HEROES } from "./mock-heroes";
import {Observable, of} from "rxjs";

@Injectable({
  // 1  injectables can be made available in several methods. in this case in the service itself by providing the line "providedIn: 'root' ".
  // This makes a single instance of the service, which is available for every class
  providedIn: 'root'
})

// 2 a service can get its (hero) information from anywhere. web storage, local or a mock data source.
export class HeroService {

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    //of(HEROES) returns a single value. an array of mock heroes
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
