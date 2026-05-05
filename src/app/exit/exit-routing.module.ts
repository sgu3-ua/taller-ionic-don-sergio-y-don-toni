import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { exitPage } from './exit.page';

const routes: Routes = [
  {
    path: '',
    component: exitPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class exitPageRoutingModule {}
