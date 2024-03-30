-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for book_store
DROP DATABASE IF EXISTS `book_store`;
CREATE DATABASE IF NOT EXISTS `book_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `book_store`;

-- Dumping structure for table book_store.book
DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `ID` int NOT NULL,
  `BOOK_NAME` varchar(250) NOT NULL DEFAULT '',
  `AUTHOR_NAME` varchar(250) NOT NULL DEFAULT '',
  `PUBLISHER_NAME` varchar(250) NOT NULL DEFAULT '',
  `DESCRIPTION` text NOT NULL,
  `PUBLISHED_DATE` date NOT NULL,
  `IMAGE_URL` varchar(500) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table book_store.book: ~20 rows (approximately)
DELETE FROM `book`;
INSERT INTO `book` (`ID`, `BOOK_NAME`, `AUTHOR_NAME`, `PUBLISHER_NAME`, `DESCRIPTION`, `PUBLISHED_DATE`, `IMAGE_URL`) VALUES
	(1, 'Designing Data-Intensive Applications', 'Martin Kleppmann', 'O\'Reilly Media, Inc.', 'Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords?', '2017-03-29', 'https://m.media-amazon.com/images/I/91hcxRpmUOL.jpg'),
	(2, 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 3rd Edition', 'Aurélien Géron', 'O\'Reilly Media, Inc.', 'Through a recent series of breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This bestselling book uses concrete examples, minimal theory, and production-ready Python frameworks (Scikit-Learn, Keras, and TensorFlow) to help you gain an intuitive understanding of the concepts and tools for building intelligent systems.', '2022-10-02', 'https://m.media-amazon.com/images/I/91uCeSLxmbL._AC_UF1000,1000_QL80_.jpg'),
	(3, 'Python Crash Course, 3rd Edition', ' Eric Matthes', 'O\'Reilly Media, Inc.', 'Python Crash Course is the world\'s best-selling guide to the Python guide programming language, with over 1,500,000 copies sold to date!\r\n\r\nThis fast-paced, thorough introduction to programming with Python will have you writing code, solving problems, and making cool projects that work in no time.\r\n\r\nIn the first half of the book, you\'ll learn basic programming concepts, such as variables, lists, loops, and classes, and practice writing clean code with exercises for each topic. ', '2023-01-12', 'https://media.istockphoto.com/id/1210701957/vector/abstract-minimal-geometric-circle-background-for-business-annual-report-book-cover-brochure.jpg?s=612x612&w=0&k=20&c=ZfeNQNhrDFK_tZZqANCvuAg0eAEwJclsUYTb8_80k-Q='),
	(4, 'Fundamentals of Data Engineering', 'Matt Housley', 'O\'Reilly Media, Inc.', 'Data engineering has grown rapidly in the past decade, leaving many software engineers, data scientists, and analysts looking for a comprehensive view of this practice. With this practical book, you\'ll learn how to plan and build systems to serve the needs of your organization and customers by evaluating the best technologies available through the framework of the data engineering lifecycle.', '2022-07-19', 'https://img.freepik.com/free-vector/minimal-voronoi-covers-design-geometric-glass-clusters-with-gradient-color-cool-trendy-abstract-backdrop-banne-poster-flyer-etc-vector-template_1217-5813.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711670400&semt=ais'),
	(5, 'Acing the System Design Interview', 'zhiyong tan', 'Manning Publications', 'Don’t be daunted by the complex, open-ended nature of system design interviews! In this in-depth guide, author Zhiyong Tan shares what he’s learned on both sides of the interview table. You’ll dive deep into the common technical topics that arise during interviews and learn how to apply them to mentally perfect different kinds of systems.', '2024-01-09', 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3JtNDQyLTAxLTAyLWNhLTAxLW1vY2t1cC5qcGc.jpg'),
	(6, 'The Staff Engineer\'s Path', 'Tanya Reilly', 'O\'Reilly Media, Inc.', 'For years, companies have rewarded their most effective engineers with management positions. But treating management as the default path for an engineer with leadership ability doesn\'t serve the industry well--or the engineer. The staff engineer\'s path allows engineers to contribute at a high level as role models, driving big projects, determining technical strategy, and raising everyone\'s skills.', '2022-11-19', 'https://www.shutterstock.com/image-vector/modern-vector-abstract-book-cover-260nw-246688564.jpg'),
	(7, 'Prompt Engineering for Generative AI', 'Mike Taylor', 'O\'Reilly Media, Inc.', 'Large language models (LLMs) and diffusion models such as ChatGPT and Stable Diffusion have unprecedented potential. Because they have been trained on all the public text and images on the internet, they can make useful contributions to a wide variety of tasks. And with the barrier to entry greatly reduced today, practically any developer can harness LLMs and diffusion models to tackle problems previously unsuitable for automation.', '2023-05-20', 'https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg'),
	(8, 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 'Pearson', 'ven bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.', '2008-08-10', 'https://m.media-amazon.com/images/I/51EWRgaqIKL.jpg'),
	(9, 'React - The Complete Guide (Includes Hooks, React Router, and Redux) - Second Edition', 'Maximilian Schwarzmüller', 'Packt Publishing', 'React.js is the most popular JavaScript library you can learn and use these days to build modern, reactive user interfaces for the web. In this course, you will dive into the core concepts of React, gaining a thorough understanding of its purpose and benefits. From building components and creating dynamic UIs to harnessing the full potential of React Hooks and working with state management using the Context API and React Redux, we have got you covered. Learn to build standalone React apps and connect them to backends using HTTP. Master routing and data fetching techniques with React Router. Implement user authentication in React apps and build full-stack applications with Next.js.', '2022-04-01', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png'),
	(10, 'Red Hat Certified System Administrator (RHCSA) RHEL 9', 'Sander van Vugt', 'Pearson', 'Red Hat Certified System Administrator (RHCSA) RHEL 9 Complete Video Course is your complete study toolkit to get exam ready for the RHCSA RHEL 9 exam. This 14-hour course is also a great resource for anyone who wants to enhance their Linux skills to grow their career. Expert trainer and author Sander van Vugt provides topic-focused coverage of all objectives in the exam, drilling down on important concepts like Bash Shell, storage, containers, and advanced system administration tasks. You will also get real-world labs in each lesson so you can practice your skills; along with video solutions so you can assess your progress as you move through the course. The course ends with a practice exam so you can fully prepare for test day.', '2022-09-18', 'https://thumbs.dreamstime.com/z/technology-style-design-book-cover-template-blue-45867928.jpg'),
	(11, 'OCP Oracle Certified Professional Java SE 17 Developer Study Guide', ' Jeanne Boyarsky', 'Sybex', 'An effective and practical study aid to the new OCP Java SE 17 Developer certification exam', '2014-03-22', 'https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2022/05/15-essential-front-end-developer-skills1.png'),
	(12, 'Learning SQL, 3rd Edition', 'Alan Beaulieu', 'O\'Reilly Media, Inc.', 'As data floods into your company, you need to put it to work right away—and SQL is the best tool for the job. With the latest edition of this introductory guide, author Alan Beaulieu helps developers get up to speed with SQL fundamentals for writing database applications, performing administrative tasks, and generating reports. You’ll find new chapters on SQL and big data, analytic functions, and working with very large databases.', '2020-05-13', 'https://img.pikbest.com/backgrounds/20200327/color-halftone-style-book-cover-design_5731265.jpg!w700wp'),
	(13, 'Building Microservices, 2nd Editio', 'Sam Newman', 'O\'Reilly Media, Inc.', 'As organizations shift from monolithic applications to smaller, self-contained microservices, distributed systems have become more fine-grained. But developing these new systems brings its own host of problems. This expanded second edition takes a holistic view of topics that you need to consider when building, managing, and scaling microservices architectures.', '2021-08-26', 'https://c8.alamy.com/comp/HDWWJ8/abstract-book-cover-template-design-with-blue-translucent-square-HDWWJ8.jpg'),
	(14, 'Natural Language Processing with Transformers, Revised Edition', 'Thomas Wolf', 'O\'Reilly Media, Inc.', 'ince their introduction in 2017, transformers have quickly become the dominant architecture for achieving state-of-the-art results on a variety of natural language processing tasks. If you\'re a data scientist or coder, this practical book -now revised in full color- shows you how to train and scale these large models using Hugging Face Transformers, a Python-based deep learning library.', '2022-06-21', 'https://img.freepik.com/free-vector/brochure-cover-with-geometric-shapes_1048-5368.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=ais'),
	(15, 'Generative AI on AWS', 'Shelbee Eigenbrode', 'O\'Reilly Media, Inc', 'Companies today are moving rapidly to integrate generative AI into their products and services. But there\'s a great deal of hype (and misunderstanding) about the impact and promise of this technology. With this book, Chris Fregly, Antje Barth, and Shelbee Eigenbrode from AWS help CTOs, ML practitioners, application developers, business analysts, data engineers, and data scientists find practical ways to use this exciting new technology.', '2023-11-09', 'https://thumbs.dreamstime.com/z/cover-design-blue-technical-style-book-report-o-brochures-flyer-template-drawings-parts-mechanisms-85886920.jpg'),
	(16, 'Head First Java, 3rd Edition', 'Trisha Gee', 'O\'Reilly Media, Inc.', 'What will you learn from this book?', '2021-08-16', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmVM0E1RU7eMd0FuL4HRSKAnW97DR-9pQ4AEQdxcOWA&s'),
	(17, 'Python for Data Analysis, 3rd Edition', 'Wes McKinney', 'O\'Reilly Media, Inc.', 'Get the definitive handbook for manipulating, processing, cleaning, and crunching datasets in Python. Updated for Python 3.10 and pandas 1.4, the third edition of this hands-on guide is packed with practical case studies that show you how to solve a broad set of data analysis problems effectively. You\'ll learn the latest versions of pandas, NumPy, and Jupyter in the process.', '2022-04-10', 'https://img.freepik.com/free-vector/abstract-colorful-covers-with-triangles_23-2148490950.jpg'),
	(18, 'Terraform: Up and Running, 3rd Edition', 'Yevgeniy Brikman', 'O\'Reilly Media, Inc.', 'Terraform has become a key player in the DevOps world for defining, launching, and managing infrastructure as code (IaC) across a variety of cloud and virtualization platforms, including AWS, Google Cloud, Azure, and more. This hands-on third edition, expanded and thoroughly updated for version 1.0 and beyond, shows you the fastest way to get up and running with Terraform.', '2013-03-07', 'https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2021/10/CDG_blog_post_image_02-3-850x412.jpg'),
	(19, 'Developing Apps with GPT-4 and ChatGPT', 'Marie-Alice Blete', 'O\'Reilly Media, Inc.', 'This minibook is a comprehensive guide for Python developers who want to learn how to build applications with large language models. Authors Olivier Caelen and Marie-Alice Blete cover the main features and benefits of GPT-4 and ChatGPT and explain how they work. You\'ll also get a step-by-step guide for developing applications using the GPT-4 and ChatGPT Python library, including text generation, Q&A, and content summarization tools.', '2024-01-03', 'https://cdn.vectorstock.com/i/preview-1x/27/62/technology-software-as-a-service-people-standing-vector-34942762.jpg'),
	(20, 'Grokking Algorithms', 'Aditya Bhargava', 'Manning Publications', 'Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to the practical problems you face every day as a programmer. You\'ll start with sorting and searching and, as you build up your skills in thinking algorithmically, you\'ll tackle more complex concerns such as data compression and artificial intelligence. Each carefully presented example includes helpful diagrams and fully annotated code samples in Python.', '2016-05-14', 'https://frontendatscale.com/blog-assets/top-10-books-for-frontend-engineers-book-6.webp');

-- Dumping structure for table book_store.reservation
DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `BOOK_ID` int NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table book_store.reservation: ~2 rows (approximately)
DELETE FROM `reservation`;
INSERT INTO `reservation` (`ID`, `USER_ID`, `BOOK_ID`, `START_DATE`, `END_DATE`) VALUES
	(1, 1, 1, '2024-03-30', '2024-03-31'),
	(2, 1, 1, '2024-05-16', '2024-05-17'),
	(3, 1, 3, '2024-04-05', '2024-04-12'),
	(4, 1, 3, '2024-04-17', '2024-04-18'),
	(5, 1, 4, '2024-04-04', '2024-04-05'),
	(6, 1, 4, '2024-04-19', '2024-04-20'),
	(7, 1, 4, '2024-04-10', '2024-04-12'),
	(8, 1, 4, '2024-04-29', '2024-04-30'),
	(9, 1, 4, '2024-04-08', '2024-04-09');

-- Dumping structure for table book_store.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int NOT NULL,
  `FIRST_NAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `LAST_NAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `USERNAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `PASSWORD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table book_store.user: ~4 rows (approximately)
DELETE FROM `user`;
INSERT INTO `user` (`ID`, `FIRST_NAME`, `LAST_NAME`, `USERNAME`, `PASSWORD`) VALUES
	(1, 'MONISHA', 'ATTAVAR', 'MONISHAATTAVAR@GMAIL.COM', '1234'),
	(2, 'JOHN', 'SMITH', 'JOHNSMITH@GMAIL.COM', '12345'),
	(3, 'MAIDEN', 'KARLO', 'MAIDENKARLO@GMAIL.COM', '123'),
	(4, 'SARAH', 'CLAN', 'SARAH.CLAN@GMAIL.COM', 'ABC@1');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
