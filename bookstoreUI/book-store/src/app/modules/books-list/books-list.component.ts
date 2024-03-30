import { Component } from '@angular/core';
import { BookStoreService } from '../../shared/services/book-store.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {
  books:any = [];

  constructor(private bookStoreService : BookStoreService ){}
  
  ngOnInit(): void {
    this.bookStoreService.getBooks().subscribe({
    next: (booksList) => {
      booksList.forEach(book => {
        this.books.push({
          id: book.id,
          name: book.bookName,
          image: book.imageUrl,
          author: book.authorName,
          publisher: book.publisherName,
          description: book.description,
        })
      });
    }
  });
}
}
