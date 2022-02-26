import { CharactersService } from './../../characters.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../models/character.model';
import { Router } from '@angular/router';
import { LoadingService } from '../../../comunications/loadings.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 0;
  isAllLoaded = false;
  countAll: number | undefined;

  constructor(
    private charactersService: CharactersService,
    public loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMore();
  }

  async loadMore() {
    if (this.isAllLoaded) return;
    this.currentPage++;
    const opt = await this.charactersService.getAll({
      page: this.currentPage,
    });
    this.onLoadCharacters(opt);
  }

  private onLoadCharacters({ results: characters, count, next }: any) {
    this.countAll = count;
    if (!next) {
      this.isAllLoaded = true;
      return;
    }
    this.characters = [...this.characters, ...characters];
  }

  onCharacterSelect(character: any) {
    const id = character.url.match(/([0-9]+)/g)[0];
    this.router.navigateByUrl(`/characters/${id}`);
  }
}
