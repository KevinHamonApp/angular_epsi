import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor(private httpClient: HttpClient) { }

    getHeroes(): Observable<Hero[]>{
      const headers= new HttpHeaders().set("apikey", environment.api.key)
      return this.httpClient.get<Hero[]>(
          environment.api.urlRest+'Hero', {'headers':headers}
        )
    }

    getLimitHeroes(min:number, max:number): Observable<Hero[]>{
      let headers= new HttpHeaders().set("apikey", environment.api.key).set("Range", min+"-"+max)
      return this.httpClient.get<Hero[]>(
          environment.api.urlRest+'Hero', {'headers':headers}
        )
    }

    getHero(id: number): Observable<Hero[]>{
      const headers= new HttpHeaders().set("apikey", environment.api.key)
      return this.httpClient.get<Hero[]>(
          environment.api.urlRest+'Hero?id=eq.'+id, {'headers':headers}
        )
    }

    getTable(): Observable<Hero[]>{
      const headers= new HttpHeaders().set("apikey", environment.api.key)
      return this.httpClient.get<Hero[]>(
          environment.api.urlRest+'Hero', {'headers':headers}
        )
    }
}
