import { Injectable } from '@angular/core';
import { Hero} from "./hero";
import { HEROES } from "./mock-heroes";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  // 1  injectables can be made available in several methods. in this case in the service itself by providing the line "providedIn: 'root' ".
  // This makes a single instance of the service, which is available for every class
  providedIn: 'root'
})

// 2 a service can get its (hero) information from anywhere. web storage, local or a mock data source.
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService)
    {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    //.find(element => element.value===value
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id =${id}`);
    return of(hero);
  }

  //Here is a typical "service in service scenario" where the singleton messageservice is injected in heroservice, which is injected into the heroesComponent.

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

