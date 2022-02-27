import { Character } from '../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../characters.service';
import { LoadingService } from '../../../comunications/loadings.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss'],
})
export class characterDetailPageComponent implements OnInit {
  characterDetail: Character = {} as Character;

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    public loadingService: LoadingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadCharacterDetail();
  }

  private loadCharacterDetail() {
    this.activatedRoute.params.subscribe(({ id }) => this.loadCharacter(id));
  }

  private async loadCharacter(id: number) {
    this.characterDetail = await this.charactersService.getById(id);
    this.characterDetail.films = await this.charactersService.getCharacterFilms(
      this.characterDetail
    );
  }

  navigateToHome() {
    this.router.navigateByUrl('/characters');
  }
}
