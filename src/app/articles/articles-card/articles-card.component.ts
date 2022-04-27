import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.sass']
})
export class ArticlesCardComponent implements OnInit {

  @Input() article!: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
