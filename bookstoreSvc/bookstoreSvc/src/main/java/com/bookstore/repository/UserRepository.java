package com.bookstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
    List<User> findByUserNameAndPassword(String userName, String password);

}
