import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { BookStoreService } from '../../shared/services/book-store.service';
import { IReservation, Reservation } from '../../shared/models/reservation';
import { MatSnackBar } from '@angular/material/snack-bar';
import moment from 'moment';
import { ErrorToaster } from '../../shared/components/error-toaster.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrl: './reservation-history.component.scss'
})
export class ReservationHistoryComponent {

  constructor(private bookService: BookStoreService, private dialog: MatDialog) { }

  colDefs: ColDef[] = [
    {
      field: "bookName",
      flex: 2,
      resizable: true
    },
    {
      field: "startDate",
      flex: 1,
      filter: 'agDateColumnFilter',
      comparator: this.dateComparator.bind(this),
      valueFormatter: this.dateFormatter,
      filterParams: this.filterDateParams
    },
    {
      field: "endDate",
      flex: 1,
      filter: 'agDateColumnFilter',
      comparator: this.dateComparator.bind(this),
      valueFormatter: this.dateFormatter,
      filterParams: this.filterDateParams
    }
  ];
  readonly defaultColDef = {
    cellStyle: { textAlign: 'center' },
    filter: true,
    floatingFilter: true,
  };
  rowData: Reservation[] = [];


  onGridReady(params: any) {
    const userId = this.getUserIdFromStore();
    this.bookService.getReservationHistory(userId).subscribe({
      next: (reservationDetails) => {
        this.getRowData(reservationDetails);
        params.api.setColumnDefs(this.colDefs);
        params.api.setRowData(this.rowData);
      },
      error: error => {
        this.dialog.open(ErrorToaster, { data : {errorMsg: 'resrevation History cannot be fetched'}});
      }
    });
  }

  private getRowData(reservationDetails: IReservation[]) {
    reservationDetails.forEach(reservationDetail => {
      this.rowData.push({
        bookName: reservationDetail.bookName,
        startDate: moment(reservationDetail.startDate).format('DD-MM-YYYY'),
        endDate: moment(reservationDetail.endDate).format('DD-MM-YYYY')
      });
    });
  }

  private getUserIdFromStore() {
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo).id : storedUserInfo;
  }

  dateFormatter(params: any) {
    var dateAsString = params.value;
    var dateParts = dateAsString.split('-');
    return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
  }

  // DATE COMPARATOR FOR SORTING
  dateComparator(date1: any, date2: any) {
    var date1Number = this.monthToNum(date1);
    var date2Number = this.monthToNum(date2);

    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }

    return date1Number - date2Number;
  }

  // HELPER FOR DATE COMPARISON
  monthToNum(date: any) {
    if (date === undefined || date === null || date.length !== 10) {
      return null;
    }

    var yearNumber = date.substring(6, 10);
    var monthNumber = date.substring(3, 5);
    var dayNumber = date.substring(0, 2);

    var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    // 29/08/2004 => 20040829
    return result;
  }

  //FILTERING
  filterDateParams() {
    return {
      debounceMs: 500,
      suppressAndOrCondition: true,
      comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
        if (cellValue == null) {
          return 0;
        }
        var dateParts = cellValue.split('-');
        var year = Number(dateParts[2]);
        var month = Number(dateParts[1]) - 1;
        var day = Number(dateParts[0]);
        var cellDate = new Date(year, month, day);
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        } else if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        } else {
          return 0;
        }
      },
    }
  }

}
