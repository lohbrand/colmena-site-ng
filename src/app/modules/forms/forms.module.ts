import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { FormsRoutingModule } from './forms.routing';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
  ],
  declarations: [IndexComponent]
})
export class FormsModule { }
