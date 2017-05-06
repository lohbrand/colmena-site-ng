import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="col-sm col-md-10 col-md-offset-1">
        <p>{{copyright}}</p>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  copyright = 'colmena-site-ng | Colmena (c) 2017'
  constructor() { }

  ngOnInit() {
  }

}
