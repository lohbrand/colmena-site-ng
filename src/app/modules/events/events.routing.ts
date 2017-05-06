import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':id', component: ItemComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EventsRoutingModule {}

