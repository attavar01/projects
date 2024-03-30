<h1 align="center">BookstoreSvc</h1>
<br>

## Install & Dependence
- Java Zulu JDK 17
- MYSQL
- Postman (API testing)

## Directory Hierarchy
```
|—— bookstoreSvc
|    |—— .gitignore
|    |—— build.gradle
|    |—— gradle
|        |—— wrapper
|            |—— gradle-wrapper.jar
|            |—— gradle-wrapper.properties
|    |—— gradlew
|    |—— gradlew.bat
|    |—— HELP.md
|    |—— settings.gradle
|    |—— src
|        |—— main
|            |—— java
|                |—— com
|                    |—— bookstore
|                        |—— BookstoreBeApplication.java
|                        |—— controller
|                            |—— BookStoreController.java
|                        |—— helper
|                            |—— BookStoreException.java
|                        |—— model
|                            |—— Book.java
|                            |—— Reservation.java
|                            |—— User.java
|                        |—— repository
|                            |—— BookRepository.java
|                            |—— ReservationRepository.java
|                            |—— UserRepository.java
|                        |—— response
|                            |—— ReservationDates.java
|                            |—— ReservationHistory.java
|            |—— resources
|                |—— application.properties
|                |—— application.yaml
|                |—— static
|                |—— templates
|        |—— test
|            |—— java
|                |—— com
|                    |—— bookstore
|                        |—— BookstoreBeApplicationTests.java
```
## :dart: About ##

BookStoreSvc is an application which is developed in Java 17 aided by MYSQL DB. This application can be used to view the wide range of books and their availibility 
to reserve for a specific  period of time. It provides the following API's to fulfil the same.

- http://localhost:8080/api/books
- http://localhost:8080/api/signIn

```json
{
  "username": "monishaattavar@gmail.com",
  "password" : "1234"
}
```
- http://localhost:8080/api/reservationHistory?userId=1
- http://localhost:8080/api/reservationDates?bookId=1
- http://localhost:8080/api/reserveBook
```json
{
    "userId": 1,
    "bookId": 4,
     "startDate": "2024-04-10",
     "endDate": "2024-04-12"
}
```


## :rocket: Technologies ##

The following tools were used in this project:

- [Java](https://docs.oracle.com/en/java/javase/17/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring JPA](https://spring.io/projects/spring-data-jpa)
- [MySQL](https://dev.mysql.com/doc/)


## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/attavar01/projects.git

# Run the project (sample)
$ C:\Program Files\Zulu\zulu-17\bin\java.exe' '-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:52744' '@C:\Users\monis\AppData\Local\Temp\cp_bcjoq20xhnuua0uhnbozc0ake.argfile' 'com.bookstore.BookstoreBeApplication' 

# The server will initialize in the <http://localhost:8080>
```

&#xa0;

<a href="#top">Back to top</a>
