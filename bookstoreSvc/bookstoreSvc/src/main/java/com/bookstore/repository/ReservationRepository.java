package com.bookstore.repository;

import java.util.List;
import java.sql.Date;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookstore.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    List<Reservation> findByBookId(Integer bookId);

    List<Reservation> findByUserId(Integer userId);

    @Query(value = "SELECT r.start_date, r.end_date, b.book_name " +
            "FROM reservation r " +
            "INNER JOIN book b  " +
            "ON r.book_id=b.id WHERE r.USER_ID=?1", nativeQuery = true)
    List<Object[]> findReservationByUserId(Integer userId);

    @Query(value = "SELECT * FROM reservation " +
            "WHERE book_id=?3 AND (?1 BETWEEN start_date AND end_date) OR (?2 BETWEEN start_date AND end_date)", nativeQuery = true)
    List<Reservation> validateReservation(Date startDate, Date endDate, Integer bookId);

}
