package com.bookstore.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.helper.BookStoreException;
import com.bookstore.model.Book;
import com.bookstore.model.Reservation;
import com.bookstore.model.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.ReservationRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.response.ReservationDates;
import com.bookstore.response.ReservationHistory;

import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.sql.Date;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class BookStoreController {

    private final BookRepository bookRepository;
    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;

    @GetMapping("books")
    public List<Book> getBooks() {
        return this.bookRepository.findAll();
    }

    @PostMapping("signIn")
    public User getUser(@RequestBody User user) throws Exception {
        List<User> users = this.userRepository.findByUserNameAndPassword(user.getUserName().toUpperCase(),
                user.getPassword());
        if (users.size() == 1) {
            return users.stream().findFirst().get();
        } else {
            throw new BookStoreException("User not found");
        }
    }

    @PostMapping("reservationHistory")
    public List<ReservationHistory> getReservationHistory(@RequestParam Integer userId) throws Exception {
        List<Object[]> reservations = this.reservationRepository.findReservationByUserId(userId);
        return reservations.stream().map(i -> new ReservationHistory(i[2].toString(), (Date) i[0], (Date) i[1]))
                .collect(Collectors.toList());
    }

    @PostMapping("reserveBook")
    public Reservation saveReservation(@RequestBody Reservation reservation) throws Exception {
        List<Reservation> existingReservations = this.reservationRepository
                .validateReservation(reservation.getStartDate(), reservation.getEndDate(), reservation.getBookId());
        if (existingReservations.size() > 0) {
            throw new BookStoreException("This date range has already been reserved, please choose a different date");
        }
        Reservation savedReservation = this.reservationRepository.save(reservation);
        return savedReservation;
    }

    @PostMapping("reservationDates")
    public List<ReservationDates> getReservationDatesByBookId(@RequestParam Integer bookId) throws Exception {
        List<Reservation> reservations = this.reservationRepository.findByBookId(bookId);
        List<ReservationDates> reservationDates = reservations.stream()
                .map(i -> new ReservationDates(i.getStartDate(), i.getEndDate())).collect(Collectors.toList());
        return reservationDates;
    }

}
