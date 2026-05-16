import { Component, OnInit } from '@angular/core';
import { Storage as StorageService } from '../services/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false
})
export class favoritesPage {

  constructor(private storage: StorageService) {}
}
