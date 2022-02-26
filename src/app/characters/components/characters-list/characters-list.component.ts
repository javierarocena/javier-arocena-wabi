import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() characters: Character[] = [];

  @Output('onCharacterSelect') characterSelectEmitter: EventEmitter<Character> =
    new EventEmitter();

  @Output('onScrollEnding') scrollEndingEmitter: EventEmitter<void> =
    new EventEmitter();

  onCharacterSelect(character: Character) {
    this.characterSelectEmitter.emit(character);
  }

  onScroll() {
    this.scrollEndingEmitter.emit();
  }
}
