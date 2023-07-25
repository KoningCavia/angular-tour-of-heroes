import { Injectable } from '@angular/core';
import { Hero} from "./hero";
import { HEROES } from "./mock-heroes";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from "rxjs";

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
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )


    //.find(element => element.value===value
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id =${id}`);
    return of(hero);
  }

/*
  Handle http operation that faield.
  Let the app continue.private
  @param operation - name of the operation that failed
  @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error); //log to console insted

      //TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);
    }
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

