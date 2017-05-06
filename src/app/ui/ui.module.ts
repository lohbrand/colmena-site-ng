import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { BaseLayoutComponent } from './layouts/base/base.component';
import { FullLayoutComponent } from './layouts/full/full.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BaseLayoutComponent,
    FullLayoutComponent,
  ],
  exports: [
    BaseLayoutComponent,
    FullLayoutComponent,
  ],
})
export class UiModule { }
