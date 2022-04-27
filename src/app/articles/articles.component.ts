import { Component, OnInit } from '@angular/core';

import { PlosService } from '../core/services/plos.service';
import { IArticle } from '../shared/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
})
export class ArticlesComponent implements OnInit {
  title: string = 'Articles List';
  articles: IArticle[] = [];

  constructor(private plosService: PlosService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.plosService.getArticles().subscribe((articles: IArticle[]) => {
      this.articles = articles;
    });
  }
}
