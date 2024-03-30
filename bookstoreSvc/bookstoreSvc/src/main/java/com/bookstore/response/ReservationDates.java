package com.bookstore.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ReservationDates {

    private Date startDate;

    private Date endDate;
}
