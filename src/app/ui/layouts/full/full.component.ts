import { Component } from '@angular/core';

@Component({
  template: `
    <app-header></app-header>
    <app-main>
      <router-outlet></router-outlet>  
    </app-main>
    <app-footer></app-footer>
  `,
})
export class FullLayoutComponent {}
