import { Observable } from 'rxjs';
import { Character } from './character.model';

export interface CharacterProvider {
  getAll(opt: any): Observable<Character[]>;
}
