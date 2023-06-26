import { Component} from '@angular/core';
import { ArticleData } from '../data/data';
import { Article } from '../models/article.models';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  articles: Article[];

  constructor() {
    this.articles = new ArticleData().getData();
  }

}
