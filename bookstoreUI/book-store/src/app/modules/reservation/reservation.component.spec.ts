import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ReservationDates } from '../../shared/models/reservationDates';
import { ErrorToaster } from '../../shared/components/error-toaster.component';
import { SuccessToaster } from '../../shared/components/success-toaster.component';



describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent],
     imports:[RouterModule.forRoot([]), 
     HttpClientTestingModule, 
     MatFormFieldModule, 
     MatButtonModule,
     MatDatepickerModule,
     MatInputModule,
     MatDatepickerModule,
     MatNativeDateModule, 
     BrowserAnimationsModule,
     FormsModule,
     ReactiveFormsModule],
     providers: [MatDatepickerModule,
      { provide: ActivatedRoute,
        useValue: {
          paramMap: of(new Map(Object.entries({
            id: '1'
        })))
      }
    }
     ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and set all the prerequisites', () => {
    spyOn(component.localStorageSvc, 'getStorage').and.returnValue('');
    spyOn(component, 'generateDatesByRange').and.returnValue(['2024-09-09']);
    spyOn(component.bookService, 'getReservationDatesByBookId').and.returnValue(of([]));
    const sampleBook = {id : 1, name: '', author: '', publisher:'', description:'',image: ''};
    history.pushState({book: sampleBook},'');
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.bookId).toEqual(1);
    expect(component.bookDetail).toEqual(sampleBook);
    expect(component.reservedList).toEqual(['2024-09-09']);
    expect(component.isReservable).toEqual(true);
  });

  it('should open ErrorToaster when getReservationDatesByBookId throws error', () => {
    spyOn(component.dialog, 'open');
    spyOn(component.bookService, 'getReservationDatesByBookId').and.returnValue(throwError({error: {message: ''}}));
    const sampleBook = {id : 1, name: '', author: '', publisher:'', description:'',image: ''};
    history.pushState({book: sampleBook},'');
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.dialog.open).toHaveBeenCalledWith(ErrorToaster, { data : {errorMsg: 'Resrevation dates cannot be fetched for this book, pls try again'}})
  });

  it('should generateDatesByRange', () => {
    const reservationDates:ReservationDates[] = [{startDate: '2023-06-12', endDate: '2023-06-14'}];
  
    const actual = component.generateDatesByRange(reservationDates);

    expect(actual).toEqual(['12-06-2023', '13-06-2023', '14-06-2023']);
  });

  it('should generateDatesByRange when start and end date are same', () => {
    const reservationDates:ReservationDates[] = [{startDate: '2023-06-12', endDate: '2023-06-12'}];
  
    const actual = component.generateDatesByRange(reservationDates);

    expect(actual).toEqual(['12-06-2023']);
  });

  it('should generateDatesByRange when start and end date are same', () => {
    const reservationDates:ReservationDates[] = [{startDate: '2023-06-12', endDate: '2023-06-13'}];
  
    const actual = component.generateDatesByRange(reservationDates);

    expect(actual).toEqual(['12-06-2023', '13-06-2023']);
  });

  it('should disable date in date picker', () => {
    component.reservedList = ['12-06-2023'];
    const actual = component.myFilter(new Date('2023-06-12'));

    expect(actual).toEqual(false);
  });

  it('should disable date in date picker', () => {
    component.reservedList = ['13-06-2023'];
    const actual = component.myFilter(new Date('2023-06-12'));

    expect(actual).toEqual(true);
  });

  it('should reserve the book', () => {
    spyOn(component.dialog, 'open');
    localStorage.setItem('userInfo', JSON.stringify({id: 1}));
    component.range.setValue({start: new Date('2024-06-12'), end: new Date('2024-06-13')})
    spyOn(component.bookService, 'reserveBook').and.returnValue(of(null));
    spyOn(router, 'navigate');
    
    component.onReserve();

    expect(component.dialog.open).toHaveBeenCalledWith(SuccessToaster,
      {data: {start: '12-06-2024', end: '13-06-2024'}})  ;
      expect(router.navigate).toHaveBeenCalledWith(['/mybooks']);
  });

  it('should throw error when reservation of book fails', () => {
    spyOn(component.dialog, 'open');
    localStorage.setItem('userInfo', JSON.stringify({id: 1}));
    component.range.setValue({start: new Date('2024-06-12'), end: new Date('2024-06-13')})
    spyOn(component.bookService, 'reserveBook').and.returnValue(throwError({error: { message: 'error to reserve'}}));
    
    component.onReserve();

    expect(component.dialog.open).toHaveBeenCalledWith(ErrorToaster,
      {data: {errorMsg: 'error to reserve'}})  ;
  });
});
