CREATE DATABASE  IF NOT EXISTS `challenge_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `challenge_database`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: challenge_database
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
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240316193616-create_users_table.cjs'),('20240316234942-create-user.cjs'),('20240316235914-modeloUserActualizado.cjs'),('20240317001726-create-users-table.cjs'),('20240318014154-create_tramites_table.cjs');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tramites`
--

DROP TABLE IF EXISTS `tramites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tramites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `numero_tramite` varchar(255) DEFAULT NULL,
  `estado` varchar(255) NOT NULL DEFAULT 'pendiente',
  `userId` int NOT NULL,
  `nombre_archivo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `tramites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tramites`
--

LOCK TABLES `tramites` WRITE;
/*!40000 ALTER TABLE `tramites` DISABLE KEYS */;
INSERT INTO `tramites` VALUES (1,'Juan','Perez','40589321','00123546563','aceptado',3,'CV-Julian-Finelli-2024.pdf','2024-03-22 00:02:43','2024-03-22 02:51:03'),(2,'Mario','Gomez','39467223','00587234109','rechazado',4,'comprobanteNumero-2.jpg','2024-03-22 00:10:09','2024-03-22 02:51:12'),(3,'Laura','Garcia','40454605','00231456870','pendiente',5,'comprobante-de-pago.pdf','2024-03-22 00:12:07','2024-03-22 00:12:07'),(4,'Guillermo','Solano','38954326','00987451236','pendiente',6,'comprobante-numero-3.jpeg','2024-03-22 00:14:01','2024-03-22 00:14:01'),(5,'Carla','Rodriguez','36874123','00984456870','vencido',7,'comprobantedepago7.jpg','2024-03-22 00:20:13','2024-03-22 02:51:24'),(6,'Maria','Cuello','39012687','00839012687','pendiente',8,'pago44.png','2024-03-22 00:59:40','2024-03-22 00:59:40'),(7,'Mariano','Moreno','41268745','00241268745','pendiente',9,'plantilla-recibo-word.png','2024-03-22 01:11:37','2024-03-22 01:11:37'),(8,'Carlos','Marconi','41305689','00413056894','pendiente',11,'comprobanteDePago-14.png','2024-03-22 01:20:38','2024-03-22 01:20:38'),(9,'Marcos','Solis','39485462','00213056892','pendiente',13,'reciboMarcosSolis.jpg','2024-03-22 01:29:56','2024-03-22 01:29:56'),(10,'Antonio','Margarete','40454705','00240454705','pendiente',14,'comprobante-de-pago-Antonio.jpg','2024-03-22 02:43:17','2024-03-22 02:43:17'),(11,'Manuel','Ortiz','40657708','00440657708','pendiente',15,'comprobante-de-pago-Manuel-Ortiz.jpg','2024-03-22 02:50:32','2024-03-22 02:50:32'),(12,'Leandro','Martinez','41206780','00441206780','aceptado',16,'comprobante-de-pago-Leandro-Martinez.png','2024-03-22 02:57:41','2024-03-22 02:58:34'),(13,'Jonas','Gutierrez','40454705','00125357895','aceptado',18,'progresar.jpeg','2024-03-22 13:36:55','2024-03-22 13:37:08');
/*!40000 ALTER TABLE `tramites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'julianfinelli97@gmail.com','$2a$10$wE2tc8saCOOkjpFj2gRb7ufJOwnAKlP3RjjPzJcLuQQFh9nmqw.o2',1,'2024-03-21 23:50:37','2024-03-21 23:50:37'),(2,'admin_snciudad@gmail.com','$2a$10$sI3GtIzzrOMWu3j.3wNwyudl0xpCL.bL9kZJ/j53FOU6.PXNKGkRe',1,'2024-03-21 23:51:46','2024-03-21 23:51:46'),(3,'juan_perez21@gmail.com','$2a$10$dOVqcBZ66A8DDJRY0xc1fuPBV40cXvJqIzG7BldBnOGgE3ux0m9TS',0,'2024-03-21 23:53:17','2024-03-21 23:53:17'),(4,'mariogomez_14@gmail.com','$2a$10$rACUnwxSkJriq8tkdfc4F.X5qXLveh/ujXojYP64PO8NaIbcpS2D2',0,'2024-03-22 00:07:29','2024-03-22 00:07:29'),(5,'laura_garcia57@gmail.com','$2a$10$Kv8jPb33DICD6wQpbU5A5uUnU3NMSvN388y9pSKsQHNSRcrKBZ3hq',0,'2024-03-22 00:11:19','2024-03-22 00:11:19'),(6,'guillermo_solano24@gmail.com','$2a$10$AgWz8bAtVk5rsFXHUzeMKOU3zGTncMGp3mLjjd7H7aZcQQ1OfI8Xm',0,'2024-03-22 00:12:58','2024-03-22 00:12:58'),(7,'carla_rodriguez25@gmail.com','$2a$10$/jcdCDKCUtzT6aKG4Te50.MXXtDyR.CF/mU7Bm7odj1DZBIpAZtiu',0,'2024-03-22 00:17:56','2024-03-22 00:17:56'),(8,'maria_cuello11@gmail.com','$2a$10$R3ITNSQtKNc5HSQ17Vpof.iZyW1O1jXF36yZj1zyAoW9zJ86BKWpe',0,'2024-03-22 00:55:36','2024-03-22 00:55:36'),(9,'marianoMoreno88@gmail.com','$2a$10$57MymZ/ztmbrKL5AyLuX2uc65pRRqAib2tWXl8XoIxF3yOjMyqbYC',0,'2024-03-22 01:10:58','2024-03-22 01:10:58'),(10,'walterDiaz28@gmail.com','$2a$10$0dnC/nRvbOsojxm60y63Jul2Cozx5kzhoHUvS8Lmg/7oQ9zyUPxm2',0,'2024-03-22 01:15:04','2024-03-22 01:15:04'),(11,'carlos_marconi21@gmail.com','$2a$10$tBUCsj/GZKLrkNWv4wkTHuG25TVyYmIeKhaHHdDQjy/FhwVS8e85m',0,'2024-03-22 01:19:58','2024-03-22 01:19:58'),(12,'paula_gutierrez47@gmail.com','$2a$10$vDFwSBt5IFr9il1.xLYWAuIwsRp0ufDexYr9sdqJ7vh7CqQeTGU32',0,'2024-03-22 01:25:24','2024-03-22 01:25:24'),(13,'marcos_solis11@gmail.com','$2a$10$xRYkooEWgcRzAP4/zoJTIuSeXYef4ERqA7OZtiFmey8mXeV1SCeAC',0,'2024-03-22 01:29:12','2024-03-22 01:29:12'),(14,'antonio_margarete15@gmail.com','$2a$10$1ExrlXsPO7g6DEL77VzK4ObXCHYahNvKwJKVx2TtJwaxCt2Sb60ey',0,'2024-03-22 02:42:43','2024-03-22 02:42:43'),(15,'manuel_ortiz44@gmail.com','$2a$10$YyRutSKXd8E.PJE3.eRLJ.gtQzs5nNFt6FEtXdMQW6z/nUShcN8L6',0,'2024-03-22 02:50:00','2024-03-22 02:50:00'),(16,'leandro_martinez11@gmail.com','$2a$10$mN9VhuFjOMIYNnPqKvMcQ.XLD1KDftJQ45aqqoTptIq7lz.VapnaS',0,'2024-03-22 02:57:00','2024-03-22 02:57:00'),(17,'romanpasiulo@gmail.com','$2a$10$I/Iw.KAGRIdP79atrwzv/eAtAMDf17HAO1R/VSUXHT3XKogHYORMS',0,'2024-03-22 12:18:50','2024-03-22 12:18:50'),(18,'jonas_gutierrez23@gmail.com','$2a$10$cvH5Cjl41EbSbyNm59LoyeHfNaPzqst30KOwI.ixc0O78dx7z.03C',0,'2024-03-22 13:36:28','2024-03-22 13:36:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'challenge_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-25 19:58:47
