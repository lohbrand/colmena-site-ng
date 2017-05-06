import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}

@Component({
  template: '<h1>Page could not be found...</h1>',
})
export class NotFoundComponent {}
