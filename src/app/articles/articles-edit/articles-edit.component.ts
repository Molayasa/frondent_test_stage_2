import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { IArticleEdit } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesEditComponent implements OnInit {
  articleForm!: FormGroup;
  @Output() articleInserted = new EventEmitter<IArticleEdit>();

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.articleForm = this.formBuilder.group({
      titleDisplay: ['', Validators.required],
      journal: ['', Validators.required],
      abstract: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  insertArticle(): void {
    if (this.articleForm.valid) {
      this.articleInserted.emit(this.articleForm.value);
      this.articleForm.reset();
    }
  }
}
