-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: retroworld_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Playstation','2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'Xbox','2023-10-19 06:39:51','2023-10-19 06:39:51'),(3,'Nintendo','2023-10-19 06:39:51','2023-10-19 06:39:51'),(4,'Arcade','2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Masculino','2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'Femenino','2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Nintendo Game&Watch-Edición donkey kong 2',75000,0,'-Made in japan , funciona con pilas LR44, contiene reloj digital,vuelve al pasado y disfruta esta gran consola','Game&watch-donkey-kong-2.png',1,1,3,1,'2023-10-19 06:39:51','2023-10-19 06:39:51',NULL),(2,'Nintendo 64',155156,0,'Nintendo 64 es la cuarta videoconsola de sobremesa descontinuada producida por Nintendo, desarrollada para suceder a la Super Nintendo. Fue la primera consola concebida para dar el salto del 2D al 3D.','Nintendo64.png',1,1,3,1,'2023-10-19 06:39:51','2023-10-19 06:39:51',NULL),(3,'Xbox 360',70000,0,'Xbox 360 es la segunda videoconsola de sobremesa de la marca Xbox producida por Microsoft. Fue desarrollada en colaboración con IBM y ATI (AMD) y lanzada en América del Sur, América del Norte, Japón, Europa y Australia entre 2005 y 2006.','xbox360.png',1,2,2,1,'2023-10-19 06:39:51','2023-10-19 06:39:51',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'User','2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'In-sale','2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'Visited','2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231018061859-create-category.js'),('20231018062123-create-section.js'),('20231018062259-create-type.js'),('20231018064436-create-product.js'),('20231018065428-create-role.js'),('20231018065529-create-genre.js'),('20231018070058-create-user.js'),('20231018070917-create-status.js'),('20231018071806-create-order.js'),('20231018072118-create-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Consola','2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'Repuesto','2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aldo','Chalup','aldochalup@gmail.com','$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.','2018-07-22 00:00:00',388522,NULL,1,1,'2023-10-19 06:39:51','2023-10-19 06:39:51'),(2,'Ricardo','Fort','ricky@gmail.com','$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.','2016-07-22 00:00:00',388525,NULL,2,1,'2023-10-19 06:39:51','2023-10-19 06:39:51'),(3,'Sebastian','Tapia Marca','fuhlt@hotmail.com','$2a$10$3UQdqOGXcAXz2OsDDiWHVuDPlKWgxYfIOb3D9ZruuUDpY/7i/JO..','2016-07-22 00:00:00',385525,NULL,1,1,'2023-10-19 06:39:51','2023-10-19 06:39:51'),(4,'Neyser','Sanchez','1010andony@gmail.com','$2a$10$MSegsMPddBWdzj12PS1XtuE9SIIfV8vfNe2sw2Yh1mR0GihWbjKeG','1998-07-03 00:00:00',382525,NULL,1,1,'2023-10-19 06:39:51','2023-10-19 06:39:51');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-19  3:55:18
