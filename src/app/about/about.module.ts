import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { aboutPage } from './about.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { aboutPageRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    aboutPageRoutingModule
  ],
  declarations: [aboutPage]
})
export class aboutPageModule {}
