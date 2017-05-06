import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { HomeRoutingModule } from './home.routing';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    IndexComponent,
  ]
})
export class HomeModule { }
