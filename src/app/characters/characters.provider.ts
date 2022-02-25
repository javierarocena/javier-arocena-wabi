import { Observable } from 'rxjs';
import { Character } from './models/character.model';
import { CharacterProvider } from './models/character.provider.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CharactersProvider implements CharacterProvider {
  constructor(private http: HttpClient) {}

  getAll({ page }: any): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/?page=${page}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  getByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
