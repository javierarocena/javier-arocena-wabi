import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent {
  @Input() character: Character | undefined;
}
