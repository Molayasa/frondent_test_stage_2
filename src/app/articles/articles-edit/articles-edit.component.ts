import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlosService } from 'src/app/core/services/plos.service';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesEditComponent implements OnInit {
  articleForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private plosService: PlosService
  ) {
    this.articleForm = this.formBuilder.group({
      titleDisplay: ['', Validators.required],
      journal: ['', Validators.required],
      abstract: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  insertArticle() {
    if (this.articleForm.valid) {
      this.plosService.insertArticle(this.articleForm.value).subscribe({
        next: (_res) => {
          alert('Article added successfully');
          this.articleForm.reset();
        },
        error: () => {
          alert('Error while adding new article');
        },
      });
    }
  }
}
