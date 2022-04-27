import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ArticlesRoutingModule.components, ArticlesEditComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ArticlesModule {}
