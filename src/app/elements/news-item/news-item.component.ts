import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
})
export class NewsItemComponent {

  @Input() item;

}
