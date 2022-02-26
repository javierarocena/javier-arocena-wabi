import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InView } from './directives/is-visible.directive';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent, InView],
  declarations: [SpinnerComponent, InView],
})
export class SharedModule {}
