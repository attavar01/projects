package com.bookstore.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "book_name")
    private String bookName;

    @Column(name = "author_name")
    private String authorName;

    @Column(name = "publisher_name")
    private String publisherName;

    private String description;

    @Column(name = "published_date")
    private Date publishedDate;

    @Column(name = "image_url")
    private String imageUrl;

}
