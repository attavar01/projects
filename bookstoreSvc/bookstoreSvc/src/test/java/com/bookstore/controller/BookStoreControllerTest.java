package com.bookstore.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.bookstore.helper.BookStoreException;
import com.bookstore.model.Book;
import com.bookstore.model.Reservation;
import com.bookstore.model.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.ReservationRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.response.ReservationDates;

@ExtendWith(MockitoExtension.class)

public class BookStoreControllerTest {
    private BookStoreController bookController;

    @Mock
    private BookRepository bookRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private ReservationRepository reservationRepository;

    @BeforeEach
    public void initialize() {
        bookController = new BookStoreController(bookRepository, userRepository, reservationRepository);
    }

    @Test
    public void testGetBooks() {
        Book book = mock(Book.class);
        List<Book> books = new ArrayList<>();
        books.add(book);
        when(bookRepository.findAll()).thenReturn(books);

        List<Book> actual = bookController.getBooks();
        verify(bookRepository, times(1)).findAll();
        assertEquals(books.size(), actual.size());
    }

    @Test
    public void testGetUserWhenUserCredentialsAreCorrectThenReturnUser() throws Exception {
        User user = mock(User.class);
        when(user.getUserName()).thenReturn("testuser");
        when(user.getPassword()).thenReturn("password");
        List<User> users = new ArrayList<>();
        users.add(user);
        when(userRepository.findByUserNameAndPassword(anyString(), anyString())).thenReturn(users);

        User actual = bookController.getUser(user);
        
        verify(userRepository, times(1)).findByUserNameAndPassword(anyString(), anyString());
        assertEquals(actual, user);
    }

    @Test
    public void testGetUserWhenUserCredentialsAreIncorrectThenThrowException() throws Exception {

        User user = mock(User.class);
        when(user.getUserName()).thenReturn("testuser");
        when(user.getPassword()).thenReturn("password");
        List<User> users = new ArrayList<>();
        when(userRepository.findByUserNameAndPassword(anyString(), anyString())).thenReturn(users);

        Exception exception = assertThrows(BookStoreException.class, () -> bookController.getUser(user));
        verify(userRepository, times(1)).findByUserNameAndPassword(anyString(), anyString());
        assertEquals("User not found", exception.getMessage());
    }

    @Test
    public void testSaveReservation() throws Exception {
        Reservation reservation = mock(Reservation.class);
        when(reservationRepository.validateReservation(any(Date.class), any(Date.class), anyInt()))
                .thenReturn(new ArrayList<>());
        when(reservation.getStartDate()).thenReturn(Date.valueOf("2024-09-09"));
        when(reservation.getEndDate()).thenReturn(Date.valueOf("2024-09-10"));
        when(reservationRepository.save(reservation)).thenReturn(reservation);

        Reservation actual = bookController.saveReservation(reservation);
        verify(reservationRepository, times(1)).validateReservation(any(Date.class), any(Date.class), anyInt());
        verify(reservationRepository, times(1)).save(any(Reservation.class));
        assertEquals(actual, reservation);
    }

    @Test
    public void testSaveReservationWhenDatesAreReservedThenThrowException() throws Exception {
        Reservation reservation = mock(Reservation.class);
        List<Reservation> reservations = new ArrayList<>();
        reservations.add(reservation);
        when(reservationRepository.validateReservation(any(Date.class), any(Date.class), anyInt()))
                .thenReturn(reservations);
        when(reservation.getStartDate()).thenReturn(Date.valueOf("2024-09-09"));
        when(reservation.getEndDate()).thenReturn(Date.valueOf("2024-09-10"));
        Exception exception = assertThrows(BookStoreException.class, () -> bookController.saveReservation(reservation));
       
        verify(reservationRepository, times(1)).validateReservation(any(Date.class), any(Date.class), anyInt());
        assertEquals("This date range has already been reserved, please choose a different date", exception.getMessage());
    }

    @Test
    public void testGetReservationDatesByBookId() throws Exception{
        Reservation reservation = mock(Reservation.class);
        List<Reservation> reservations = new ArrayList<>();
        reservations.add(reservation);
        when(reservationRepository.findByBookId(anyInt())).thenReturn(reservations);
        List<ReservationDates> actual = bookController.getReservationDatesByBookId(anyInt());
        verify(reservationRepository, times(1)).findByBookId(anyInt());        
        assertEquals(reservations.size(), actual.size());
    }

}
