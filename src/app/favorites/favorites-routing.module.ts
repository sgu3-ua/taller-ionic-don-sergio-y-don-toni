import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { favoritesPage } from './favorites.page';

const routes: Routes = [
  {
    path: '',
    component: favoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class favoritesPageRoutingModule {}
