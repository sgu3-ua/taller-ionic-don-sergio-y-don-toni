import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { wikiPage } from './wiki.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { wikiPageRoutingModule } from './wiki-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    wikiPageRoutingModule
  ],
  declarations: [wikiPage]
})
export class wikiPageModule {}
