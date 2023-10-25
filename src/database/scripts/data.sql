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
INSERT INTO `categories` VALUES (1,'Playstation','2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'Xbox','2023-10-25 05:09:16','2023-10-25 05:09:16'),(3,'Nintendo','2023-10-25 05:09:16','2023-10-25 05:09:16'),(4,'Arcade','2023-10-25 05:09:16','2023-10-25 05:09:16');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Masculino','2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'Femenino','2023-10-25 05:09:16','2023-10-25 05:09:16');
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
INSERT INTO `products` VALUES (1,'Xbox classic',1315,0,'Xbox es una videoconsola doméstica de 32 bits y la primera de la serie de videoconsolas Xbox fabricada por Microsoft.','xbox.png',1,1,2,1,'2023-10-25 05:09:16','2023-10-25 05:31:59',NULL),(2,'Nintendo Game&Watch-Edición donkey kong 2',75000,0,'-Made in japan , funciona con pilas LR44, contiene reloj digital,vuelve al pasado y disfruta esta gran consola','Game&watch-donkey-kong-2.png',1,1,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(3,'Nintendo 64',155156,545,'Nintendo 64 es la cuarta videoconsola de sobremesa descontinuada producida por Nintendo, desarrollada para suceder a la Super Nintendo. Fue la primera consola concebida para dar el salto del 2D al 3D.','Nintendo64.png',1,1,1,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(4,'Nintendo GameCube-color Indigo',35000,10,'Incluye consola, cable de alimentación,cable AV y controlador índigo para,Nintendo GameCube,El procesador de 485 MHz hace que cargar y iniciar los juegos sea más rápido que nunca, no más tiempos de carga largos El procesador crea de 6 a 12 millones de polígonos por segundo, no más ralentizaciones en medio del juego,Soporta instrucciones para efectos increíbles: tus juegos serán más brillantes, rápidos y más dramáticos,También incluye 64 canales de sonido: te sentirás como si estuvieras en el juego, con el audio de alta calidad.','NintendoGameCube.png',1,1,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(5,'Nintendo Entertainment System: NES ',390000,0,'Control Deck,2 controladores, pistola de luz Zapper Cable A/V, adaptador de CA para Nintendo,Nintendo RF Switch y 2 A/V convertidores','NintendoNes.png',1,1,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(6,'Nintendo Ds ',72000,0,'-Motor de gráficos 3D avanzado y audio de 16 canales, para gráficos y sonido superiores a otros sistemas de juegos portátiles,Puerto de micrófono integrado para control de voz de juegos, o para chat de voz con otros reproductores DS','NintendoDs.png',1,1,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(7,'Nintendo VirtualBoy ',170000,0,'Virtual Boy es una consola de sobremesa producida por Nintendo en 1995. La consola crea una ilusión monocromática (rojo/negro) de profundidad tridimensional que Nintendo promovió como realidad virtua,','NintendoVirtualBoy.png',1,1,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(8,'Nintendo Wii ',118,0,'El control Wii Remote se destaca por su capacidad de detectar movimientos en un determinado espacio lo que te permite una mayor interacción y dinamismo,Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 512 MB','NintendoWii.png',1,2,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(9,'Nintendo Switch',366,5,'Sumérgete en el mundo de los videojuegos con la Nintendo Switch de 32GB, una consola híbrida que te permite disfrutar de tus juegos favoritos tanto en casa como en cualquier lugar,Incluye 2 controles para compartir la diversión','NintendoSwitch.png',1,2,3,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(10,'Magnavox Odyssey ',450000,0,'Viaja al pasado y obten La primer consola de videojuegos de la historia,Trae 28 juegos,Contiene 2 mandos,Contiene manual de usos','Magnavox-Odyssey-Console(Primera-consola-de-la-historia).png',1,1,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(11,' Tablero arcade 10,600 en WAR',60299,0,'Plataformas aplicables: televisores, monitores, proyectores.Miles de juegos clásicos de juegos de árcade,Control de volumen.Entrada 3.5 para audífonos.Menú para búsqueda de juego.Diseño de bajo consumo de energía.','tablero1.png',1,2,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(12,' Tablero arcade con base pandora 80cm',90300,0,'Fabricado en MDFcon formaica .Vinil alta resolución (varios diseños).Acrílico 3mm en tablero.Ram 512 megas.Memoria flash de 32 gb.Medidas:80 cm de ancho x 26 cm de fondo x 12-16 cm de altura.','tablero2.png',1,2,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(13,' Consola Arcade Individual The King of fighters',50700,0,'  Se conectan a la pantalla por cable HDMI y un eliminador de corriente ya incluidos. Vienen en pares (puedes escoger uno del mismo diseño y otro diferente o ambos iguales). Incluye cable usb para conectarse entre ambos tableros.17,000 Juegos','tablero3.png',1,2,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(14,'Tablero Arcade Individual 2 piezas 16 Mil Juegos Street Fighters',53400,0,' Se conectan a la pantalla por cable HDMI y un eliminador de corriente ya incluidos.Incluye cable usb para conectarse entre ambos tableros.16,000 Juegos','tablero4.png',1,2,4,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(15,'Xbox 360',70000,0,'Xbox 360 es la segunda videoconsola de sobremesa de la marca Xbox producida por Microsoft. Fue desarrollada en colaboración con IBM y ATI (AMD) y lanzada en América del Sur, América del Norte, Japón, Europa y Australia entre 2005 y 2006.','xbox360.png',1,2,2,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(16,'Xbox 360',70000,0,'Xbox One es la tercera videoconsola de sobremesa de la marca Xbox, producida por Microsoft. Forma parte de las videoconsolas de octava generación, fue presentada por Microsoft el 21 de mayo de 2013.7​ Es la sucesora de la Xbox 360 y la predecesora de la Xbox Series X|S. Actualmente compite con PlayStation 4 de Sony y Wii U de Nintendo. Su salida a la venta fue el 22 de noviembre de 2013','xboxone.png',1,2,1,1,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(17,'Camara Playstation Ps4',150000,0,'Es compatible con realidad virtual Con reconocimiento facial Con comando de voz','playstation4cam.png',1,2,1,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(18,'Joystick Dualshock Ps4 Black',60000,0,'Tipo de control Gamepad ,sensor de movimiento,vibración, touchpad , altavoz, Dispositivos compatibles: PlayStation 4.','joystickPlaystation4.png',1,2,1,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(19,'Joystick Xbox Series S/X',62000,0,'Es inalámbrico,Con Bluetooth,Conectores de entrada','joystickxbox.png',1,2,2,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(20,'Sensor de movimiento KINECT Xbox',28000,0,'camara compatible con xbox 360 con sensor demovimiento','xboxcam.png',1,2,2,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(21,'Joystick Nintendo 64',10800,0,'Controles Retro USB,Diseño inspirado en los de la consola Nintendo 64,Conexion Plug & Play no necesitas instalar drivers.Compatible con Windows y Mac','nintendo64joystick.png',1,2,3,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(22,'Joysticks Nintendo switch',68000,0,'Cuenta con Bluetooth.Mando inalámbrico.Compatible con: Nintendo Switch.Incluye control izquierdo y derecho. Con sistema de vibración incorporado.Cuenta con 2 correas.','joysticknintendo.png',1,2,3,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(23,'Palanca Arcade Perita De 4/8',12000,0,'Incluye una palanca Arcade perita,Colores: rojo, verde, blanco, negro, celeste y amarillo','palancaArcade.png',1,2,4,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL),(24,'Boton arcade 24mm',800,0,'boton pulsador arcade color a eleccion rojo, blanco, negro , amarillo ,azul y verde','botonesArcade.png',1,2,4,2,'2023-10-25 05:09:16','2023-10-25 05:09:16',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'User','2023-10-25 05:09:16','2023-10-25 05:09:16');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'In-sale','2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'Visited','2023-10-25 05:09:16','2023-10-25 05:09:16');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231018061859-create-category.js'),('20231018062123-create-section.js'),('20231018062259-create-type.js'),('20231018064436-create-product.js'),('20231018065428-create-role.js'),('20231018065529-create-genre.js'),('20231018070058-create-user.js'),('20231018070917-create-status.js'),('20231018071806-create-order.js'),('20231018072118-create-item.js'),('20231024210259-cambiar_tipo_telefono.js'),('20231024212306-modificar-tabla-users.js');
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
INSERT INTO `types` VALUES (1,'Consola','2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'Repuesto','2023-10-25 05:09:16','2023-10-25 05:09:16');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aldo','Chalup','aldochalup@gmail.com','$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.','2018-07-22 00:00:00','0388522',NULL,1,1,'2023-10-25 05:09:16','2023-10-25 05:09:16'),(2,'Ricardo','Fort','ricky@gmail.com','$2a$10$.gr3uo9gr2F45MaHkNBuZOCFz6IXLJhPcJPBigrMvqg7VwH9fgqe.','2016-07-22 00:00:00','0388525',NULL,2,1,'2023-10-25 05:09:16','2023-10-25 05:09:16'),(3,'Sebastian','Tapia Marca','fuhlt@hotmail.com','$2a$10$3UQdqOGXcAXz2OsDDiWHVuDPlKWgxYfIOb3D9ZruuUDpY/7i/JO..','2016-07-22 00:00:00','0385525',NULL,1,1,'2023-10-25 05:09:16','2023-10-25 05:09:16'),(4,'Neyser','Sanchez','1010andony@gmail.com','$2a$10$MSegsMPddBWdzj12PS1XtuE9SIIfV8vfNe2sw2Yh1mR0GihWbjKeG','1998-07-03 00:00:00','0382525',NULL,1,1,'2023-10-25 05:09:16','2023-10-25 05:09:16'),(5,'Axel','Michel','axelmichel515@hotmail.com','$2a$10$YDfONpJEV.rOtWOjlKMN.u2AzKNSOpluQ.C/M6BvAvlq9XHLFqrze','1997-03-26 00:00:00','54546588',NULL,2,1,'2023-10-25 05:10:21','2023-10-25 05:10:21');
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

-- Dump completed on 2023-10-25  2:34:52
