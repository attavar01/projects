import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { SignIn } from '../models/signIn';
import { IReservation } from '../models/reservation';
import { Userinfo } from '../models/userInfo';
import { ReservationDates } from '../models/reservationDates';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  readonly baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any[]>(`${this.baseUrl}` + 'books');
  }

  signIn(signInDetails: SignIn) {
    return this.http.post<Userinfo>(`${this.baseUrl}signIn`, signInDetails);
  }

  getReservationHistory(userId: number) {
    const params = new HttpParams().append('userId', userId);
    return this.http.post<IReservation[]>(`${this.baseUrl}reservationHistory`, null, { params });
  }


  getReservationDatesByBookId(bookId: number) {
    const params = new HttpParams().append('bookId', bookId);
    return this.http.post<ReservationDates[]>(`${this.baseUrl}reservationDates`, null, { params });
  }

  reserveBook(bookId: number, userId: number, startDate: string, endDate: string) {
    return this.http.post<Book>(`${this.baseUrl}reserveBook`, { bookId, userId, startDate, endDate });
  }
}
