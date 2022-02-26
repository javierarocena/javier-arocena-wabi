import { characterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters.routing';
import { CharactersService } from './characters.service';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersProvider } from './characters.provider';
import { SharedModule } from 'src/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const PAGES = [CharactersPageComponent, characterDetailPageComponent];

const COMPONENTS = [CharactersListComponent, CharacterItemComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    CharactersRoutingModule,
  ],
  declarations: [...PAGES, ...COMPONENTS],
  providers: [CharactersService, CharactersProvider],
})
export class CharactersModule {}
