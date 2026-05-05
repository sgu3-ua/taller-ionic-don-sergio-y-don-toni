import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { exitPage } from './exit.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { exitPageRoutingModule } from './exit-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    exitPageRoutingModule
  ],
  declarations: [exitPage]
})
export class exitPageModule {
}
