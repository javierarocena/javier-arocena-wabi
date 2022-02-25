import { CharactersService } from './../../characters.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 0;

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.currentPage++;
    this.charactersService
      .getAll({ page: this.currentPage })
      .subscribe(({ results: characters }) =>
        this.onLoadCharacters(characters)
      );
  }

  private onLoadCharacters(characters: any[]) {
    this.characters = [...this.characters, ...characters];
  }

  onCharacterSelect(character: any) {
    const id = character.url.match(/([0-9]+)/g)[0];
    this.router.navigateByUrl(`/characters/${id}`);
  }
}
