import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersProvider } from './characters.provider';
import { Character } from './models/character.model';
import { CharacterProvider } from './models/character.provider.model';

@Injectable()
export class CharactersService {
  constructor(private provider: CharactersProvider) {}

  getAll(opt: any): Promise<any> {
    return firstValueFrom(this.provider.getAll(opt));
  }

  getById(id: number): Promise<any> {
    return firstValueFrom(this.provider.getById(id));
  }

  getCharacterFilms(character: Character) {
    return Promise.all(
      (character.films as any).map((url: string) =>
        firstValueFrom(this.provider.getByUrl(url))
      )
    );
  }
}
