import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="loading" class="alert animated">
      <h3>Loading...</h3>
    </div>
  `,
})
export class LoadingComponent {

  @Input() loading: boolean;

}
