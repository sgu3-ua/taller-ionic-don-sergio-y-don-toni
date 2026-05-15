import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'wiki',
        loadChildren: () => import('../wiki/wiki.module').then(m => m.wikiPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.aboutPageModule)
      },
      {
        path: 'exit',
        loadChildren: () => import('../exit/exit.module').then(m => m.exitPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then( m => m.favoritesPageModule)
      },
      {
        path: '',
        redirectTo: 'wiki',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
