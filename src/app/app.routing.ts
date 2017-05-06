import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './ui/layouts/base/base.component';
import { FullLayoutComponent } from './ui/layouts/full/full.component';

import { NotFoundComponent } from './app.component';


const routes: Routes = [
  { path: '', component: FullLayoutComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', loadChildren: './modules/pages/pages.module#PagesModule' },
    { path: '', loadChildren: './modules/forms/forms.module#FormsModule' },
    { path: 'events', loadChildren: './modules/events/events.module#EventsModule' },
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
    { path: 'news', loadChildren: './modules/news/news.module#NewsModule' },
  ] },
  { path: '', component: BaseLayoutComponent, children: [
    { path: '**', component: NotFoundComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
