import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticlesGridComponent } from './articles-grid/articles-grid.component';
import { ArticlesCardComponent } from './articles-card/articles-card.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';

const routes: Routes = [{ path: '', component: ArticlesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {
  static components = [
    ArticlesComponent,
    ArticlesGridComponent,
    ArticlesCardComponent,
    ArticlesEditComponent,
  ];
}
