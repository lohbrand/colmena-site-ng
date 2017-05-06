import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { PagesRoutingModule } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  declarations: [IndexComponent]
})
export class PagesModule { }
