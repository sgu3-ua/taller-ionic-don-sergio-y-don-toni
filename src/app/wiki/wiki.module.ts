import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { wikiPage } from './wiki.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CategoryComponent } from '../category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { Wiki as WikiService } from '../services/wiki';
import { wikiPageRoutingModule } from './wiki-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    wikiPageRoutingModule,
    HttpClientModule
  ],
  providers: [WikiService],
  declarations: [wikiPage, CategoryComponent]
})
export class wikiPageModule {}
