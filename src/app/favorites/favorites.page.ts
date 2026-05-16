import { Component, OnInit } from '@angular/core';
import { Storage as StorageService } from '../services/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false
})
export class favoritesPage implements OnInit {

  public favorites: any[] = [];

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.favorites = await this.storage.get('favorites') || [];
  }

  generateUrl(cat : string, id: string): string {
    return '/tabs/wiki/article/' + cat + '/' + id;
  }
  
}
