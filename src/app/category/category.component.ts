import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';
import { Wiki as WikiService} from '../services/wiki';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: false,
})
export class CategoryComponent implements OnInit {

  @Input() theCategory: Category = new Category();

  @Input() selected: boolean = false;

  @Output() clicked = new EventEmitter<string>();

  constructor(private wikiService: WikiService) { }

  ngOnInit() { }

  click() {
    this.clicked.emit(this.theCategory.name);
    console.log("clicked on " + this.theCategory.name);
    this.getArticles();
  }
  articles: any[] = [];

  getArticles() {
    this.wikiService.getAllArticles(this.theCategory.name).subscribe(
      (response) => {
        console.log('Articles fetched successfully:', response);
        this.articles = response.results; // Ajusta esto según la estructura de tu respuesta
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }

}
