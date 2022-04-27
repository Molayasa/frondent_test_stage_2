import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IArticle, IArticleEdit } from '../shared/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
})
export class ArticlesComponent implements OnInit {
  title: string = 'Articles List';
  articles: IArticle[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  insertArticle(article: IArticleEdit): void {
    this.dataService.insertArticle(article).subscribe({
      next: (articles) => {
        // TODO: Change alerts for a modal
        alert('Article added successfully');
        this.articles = articles;
      },
      error: () => {
        // TODO: Change alerts for a modal
        alert('Error while adding new article');
      },
    });
  }
}
