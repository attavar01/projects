import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListRoutingModule } from './books-list-routing.module';
import { BooksListComponent } from './books-list.component';


@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    BooksListRoutingModule
  ],
  exports: [BooksListComponent]
})
export class BooksListModule { }
