import { Component } from '@angular/core';
import { LoadingService } from '../../../app/comunications/loadings.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(public loading: LoadingService) {}
}
