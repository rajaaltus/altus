import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'about', loadChildren: './home/about/about.module#AboutModule' },
  {path: 'career', loadChildren: './home/career/career.module#CareerModule' },
  {path: 'contact', loadChildren: './home/contact/contact.module#ContactModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
