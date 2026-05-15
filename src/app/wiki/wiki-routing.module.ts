import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { wikiPage } from './wiki.page';

const routes: Routes = [
  {
    path: '',
    component: wikiPage,
  },
  {
    path: 'article/:cat/:id',
    loadChildren: () => import('../article/article.module').then( m => m.ArticlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class wikiPageRoutingModule {}
