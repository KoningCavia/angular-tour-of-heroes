import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {id: 12, name: 'Dr. Anijs'},
      {id: 13, name: 'Bambino'},
      {id: 14, name: 'Celderina'},
      {id: 15, name: 'MagnietMan'},
      {id: 16, name: 'Rubberen Robbie'},
      {id: 17, name: 'Dynamiet'},
      {id: 18, name: 'Dr. Cute'},
      {id: 19, name: 'MagMan'},
      {id: 20, name: 'Tournedo'}
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
