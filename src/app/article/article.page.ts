import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wiki } from '../services/wiki';
import { People } from '../models/people';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { Storage as StorageService } from '../services/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  title: string = '';
  id: string = '';
  category: string = '';
  isFavorite: boolean = false;
  favorites: any[] = [];

  people: People = new People();
  planet: Planet = new Planet();
  species: Species = new Species();
  starship: Starship = new Starship();

  constructor(private route: ActivatedRoute, private srv: Wiki, private storage: StorageService, private toastController: ToastController) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('cat') ?? '';
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this.storage.get('favorites').then((data) => {
      this.favorites = data || [];
      console.log(this.favorites);
      var aux = this.favorites.find(
        fav => fav.category === this.category && fav.id === this.id);
        console.log(aux);
        if (aux!=null) {
          this.isFavorite = true;
        }
    });

    this.srv.getArticle(this.category, this.id).subscribe((result: any) => {
      switch (this.category) {
        case 'People':
          this.people = result.result.properties;
          this.title = this.people.name;
          break;
        case 'Planets':
          this.planet = result.result.properties;
          this.title = this.planet.name;
          break;
        case 'Species':
          this.species = result.result.properties;
          this.title = this.species.name;
          break;
        case 'Starships':
          this.starship = result.result.properties;
          this.title = this.starship.name;
          break;
        default:
          this.title = '';
      }
    });
  }

  toggleFavorite() {
    var theName: string = '';
    if (this.isFavorite) {
      this.isFavorite = false;
      var aux = this.favorites.findIndex(fav => fav.category === this.category && fav.id === this.id);
      
      if (aux >= 0) { this.favorites.splice(aux, 1); }
      this.storage.set('favorites', this.favorites);
      this.presentToast('Removed from favorites');
    } else {
      this.isFavorite = true;
      switch (this.category) {
        case 'People':
          theName = this.people.name;
          break;
        case 'Planets':
          theName = this.planet.name;
          break;
        case 'Species':
          theName = this.species.name;
          break;
        case 'Starships':
          theName = this.starship.name;
          break;
      }
      this.favorites.push({ category: this.category, id: this.id, name: theName });
      this.storage.set('favorites', this.favorites);
      this.presentToast('Added to favorites');
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
