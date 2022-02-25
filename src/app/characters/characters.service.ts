import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersProvider } from './characters.provider';
import { Character } from './models/character.model';
import { CharacterProvider } from './models/character.provider.model';

@Injectable()
export class CharactersService {
  constructor(private provider: CharactersProvider) {}

  getAll(opt: any) {
    return this.provider.getAll(opt);
  }

  getById(id: number) {
    return this.provider.getById(id);
  }
}
