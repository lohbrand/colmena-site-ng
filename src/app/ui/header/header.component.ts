import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="sticky">
      <div class="col-sm col-md-10 col-md-offset-1">
        <a *ngFor="let item of items" href="#" role="button" [routerLink]=item.link>{{item.label}}</a>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  items = [
    { link: ['/'], label: 'Home' },
    { link: ['/', 'news'], label: 'News' },
    { link: ['/', 'events'], label: 'Events' },
    { link: ['/', 'about'], label: 'About' },
    { link: ['/', 'contact'], label: 'Contact' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
