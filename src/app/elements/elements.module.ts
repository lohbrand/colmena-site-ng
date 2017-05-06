import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsItemComponent } from './events-item/events-item.component';
import { EventsListComponent } from './events-list/events-list.component';
import { LoadingComponent } from './loading/loading.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';

const elements = [
  EventsItemComponent,
  EventsListComponent,
  LoadingComponent,
  NewsItemComponent,
  NewsListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...elements,
  ],
  exports: [
    ...elements,
  ],
})
export class ElementsModule { }
