import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { NewsRoutingModule } from './news.routing';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule,
  ],
  declarations: [
    IndexComponent,
  ]
})
export class NewsModule { }
