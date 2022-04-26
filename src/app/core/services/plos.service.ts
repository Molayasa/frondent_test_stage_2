import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IArticle, IArticlePlos } from '../../shared/interfaces';

@Injectable()
export class PlosService {
  apiUrl = 'https://api.plos.org/search?q=title:DNA';
  articles: IArticle[] = [];

  constructor(private http: HttpClient) {}

  getArticles(): Observable<IArticle[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        const articlesPlos: IArticlePlos[] = response.response.docs;
        const articles: IArticle[] = articlesPlos.map((articlePlos) => {
          const {
            id,
            journal,
            eissn,
            publication_date,
            article_type,
            author_display,
            abstract,
            title_display,
            score,
          } = articlePlos;
          return {
            id,
            journal,
            eissn,
            publicationDate: publication_date,
            articleType: article_type,
            authorDisplay: author_display,
            abstract,
            titleDisplay: title_display,
            score,
          };
        });

        return articles;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
    }
    return throwError(() => error || 'Plos server error');
  }
}
