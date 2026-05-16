import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { favoritesPage } from './favorites.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { favoritesPageRoutingModule } from './favorites-routing.module';

import { Storage as IonicStorage} from '@ionic/storage-angular';
import { Storage as StorageService } from '../services/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    favoritesPageRoutingModule
  ],
  providers: [
    StorageService, 
    IonicStorage 
  ],
  declarations: [favoritesPage]
})
export class favoritesPageModule {}
