import { Character } from '../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../characters.service';

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadCharacterDetail();
  }

  private loadCharacterDetail() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.charactersService.getById(id).subscribe((character) => {
        this.characterDetail = character;
      });
    });
  }

  navigateToHome() {
    this.router.navigateByUrl('/characters');
  }
}
