import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { characterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersPageComponent,
  },
  {
    path: ':id',
    component: characterDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
