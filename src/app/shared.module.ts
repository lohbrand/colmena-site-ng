import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ElementsModule } from './elements/elements.module';
import { UiModule } from './ui/ui.module';

const modules = [
  CommonModule,
  FormsModule,
  HttpModule,
  ElementsModule,
  UiModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class SharedModule { }
