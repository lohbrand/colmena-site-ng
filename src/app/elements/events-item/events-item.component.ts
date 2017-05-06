import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
})
export class EventsItemComponent {

  @Input() item;

}
