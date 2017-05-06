import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared.module';

import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app.routing';
import { AppComponent, NotFoundComponent } from './app.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
