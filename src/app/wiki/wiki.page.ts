import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: 'wiki.page.html',
  styleUrls: ['wiki.page.scss'],
  standalone: false,
})

export class wikiPage implements OnInit {

  readonly categoriesMockup:string = "./assets/data/categories.json";

  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    fetch(this.categoriesMockup).then(res=> res.json())
    .then(json=> {
      this.categories = json;
    });
  }

  selectedCategory: string = "";
  
  selectCategory(name: string) {
    this.selectedCategory = name;
  }

}