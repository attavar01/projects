export class Reservation {
    bookName: string = '';
    startDate: string | Date = '';
    endDate: string  | Date = '';
}

export class IReservation extends Reservation{
    id: number | undefined;
}