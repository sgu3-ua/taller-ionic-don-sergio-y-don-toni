import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';

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

  constructor() { }

  ngOnInit() { }

  click() {
    this.clicked.emit(this.theCategory.name);
    console.log("clicked on " + this.theCategory.name);
  }

}
