import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';

import { PlosService } from './services/plos.service';
@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [RouterModule, NavbarComponent, HttpClientModule],
  declarations: [NavbarComponent],
  providers: [PlosService],
})
export class CoreModule {}
