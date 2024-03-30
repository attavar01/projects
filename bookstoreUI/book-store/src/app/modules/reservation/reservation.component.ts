import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from '../../shared/services/book-store.service';
import { Book } from '../../shared/models/book';
import moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessToaster } from '../../shared/components/success-toaster.component';
import { ErrorToaster } from '../../shared/components/error-toaster.component';
import { ReservationDates } from '../../shared/models/reservationDates';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit{
 bookDetail: Book = new Book;
 todayDate = new Date();
 range = new FormGroup({
  start: new FormControl<Date | null>(null),
  end: new FormControl<Date | null>(null),
});
bookId = 0;
reservedList: any[] = [];
isReservable= false;
constructor(private activatedRoute: ActivatedRoute, public bookService:BookStoreService, 
  public dialog: MatDialog, public localStorageSvc: LocalStorageService, private _route:Router){}
  
ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookId = Number(params.get('id'));
      this.bookDetail = window.history.state.book;
      this.bookService.getReservationDatesByBookId(this.bookId).subscribe(reservedDates =>{
        this.reservedList = this.generateDatesByRange(reservedDates);
        this.isReservable = this.localStorageSvc.getStorage() != 'null'
      },error =>{
        this.dialog.open(ErrorToaster, { data : {errorMsg: 'Resrevation dates cannot be fetched for this book, pls try again'}});
      });
    });
  }

  generateDatesByRange(reservedDates:ReservationDates[]){
  let list: any[] = [];
  reservedDates.forEach(f => {
      let start = moment(f.startDate);
      let end = moment(f.endDate);
      list.push(start.format("DD-MM-YYYY"));
      for (let current = start; current <= end; current.add(1, 'd')) {
        if(!list.includes(current.format("DD-MM-YYYY")))
          list.push(current.format("DD-MM-YYYY"))
      }
  })
  return list;
  }

  myFilter =  (d: Date | null): boolean =>  {
    if (!this.reservedList.includes(moment(d).format('DD-MM-YYYY')))
      return true; else return false;
  };

  onReserve(){
    const storedUserInfo = localStorage.getItem('userInfo');
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : storedUserInfo;
    this.bookService.reserveBook(this.bookId, userInfo.id, moment(this.range.value.start).format('YYYY-MM-DD'), moment(this.range.value.end).format('YYYY-MM-DD')).subscribe(book =>{
      this.dialog.open(SuccessToaster, {data: {start: moment(this.range.value.start).format('DD-MM-YYYY'), end: moment(this.range.value.end).format('DD-MM-YYYY')}});
      this._route.navigate(['/mybooks'])
    },
    error => {
      this.dialog.open(ErrorToaster, { data : {errorMsg:error.error.message}});
    });
  }


}


