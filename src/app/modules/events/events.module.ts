import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { EventsRoutingModule } from './events.routing';

import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/index.component';

@NgModule({
  imports: [
    SharedModule,
    EventsRoutingModule,
  ],
  declarations: [
    IndexComponent,
    ItemComponent,
  ]
})
export class EventsModule { }
