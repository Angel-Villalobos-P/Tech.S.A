-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: techsa
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `celular`
--

DROP TABLE IF EXISTS `celular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `celular` (
  `idCelular` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `almacenamiento` int DEFAULT NULL,
  `ram` int DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`idCelular`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celular`
--

LOCK TABLES `celular` WRITE;
/*!40000 ALTER TABLE `celular` DISABLE KEYS */;
INSERT INTO `celular` VALUES (1,'Apple','SE','Negro',128,4,'iPhone SE 2021, misma potencia y menos costo, calidad rediseñada para que disfrutes al máximo',45000.00,10),(14,'Xiaomi','Redmi Note 10 PRO','Gris',128,6,'Telefono Celular Xiaomi Redmi Note 10Pro, \ncuenta con una pantalla de 6.67”',224400.00,3),(15,'Samsung','A72','Azul',128,6,'Samsung Celular, modelo A72 AZUL, tiene una pantalla de \n6.7 FHD+ SUPER AMOLED',300100.00,8),(16,'Samsung','S21 Ultra','Negro',256,12,'El Samsung Galaxy S21 Ultra es la variante \nmás poderosa de la serie Galaxy S21',860000.00,4),(17,'Huawei','Y7P','Azul',64,4,'Huawei Celular Y7P con una pantalla HD+ de 6.39 \npulgadas',137000.00,10),(18,'Huawei','Y9S','Negro',128,4,'Huawei Y9S Negro Onix cuenta con una pantalla\n FHD,',220000.00,7),(20,'Apple','Iphone 12','Rojo',128,4,'Supera los lí­mites de todo lo que era posible hacer hasta ahora.',754000.00,5),(21,'Apple','Iphone 12 PRO','Azul',256,6,'Con cámaras Pro fotos espectaculares',999990.00,3);
/*!40000 ALTER TABLE `celular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idCliente` int NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `usuario` varchar(30) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (123,'Angel ','Peña','antoniopea140@gmail.com','ca','8888','ton'),(4567,'Angel','Villalobos','antoniopea140@gmail.com','Cartago','angel','tony22'),(12345,'Ángel','Villalobos','antoniopea140@gmail.com','Cartago','angel','root'),(123456,'Ángel','Villalobos','antoniopea140@gmail.com','Cartago, Calle 11A','basesII','123eee'),(207540177,'Ángel','Villalobos','tony.villalobos96@gmail.com','Cartago, Calle 11A','angel','angel123');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrato`
--

DROP TABLE IF EXISTS `contrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contrato` (
  `idcontrato` int NOT NULL AUTO_INCREMENT,
  `pago` decimal(10,2) DEFAULT NULL,
  `clienteIdCliente` int DEFAULT NULL,
  PRIMARY KEY (`idcontrato`),
  KEY `clienteIdCliente` (`clienteIdCliente`),
  CONSTRAINT `contrato_ibfk_1` FOREIGN KEY (`clienteIdCliente`) REFERENCES `cliente` (`idCliente`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrato`
--

LOCK TABLES `contrato` WRITE;
/*!40000 ALTER TABLE `contrato` DISABLE KEYS */;
INSERT INTO `contrato` VALUES (37,16950.00,123456),(38,90400.00,123456),(39,79100.00,NULL),(40,22674.58,123456),(41,275720.00,123456);
/*!40000 ALTER TABLE `contrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contratoCelular`
--

DROP TABLE IF EXISTS `contratoCelular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contratoCelular` (
  `idContrato` int DEFAULT NULL,
  `idCelular` int DEFAULT NULL,
  KEY `idContrato` (`idContrato`),
  KEY `idCelular` (`idCelular`),
  CONSTRAINT `contratocelular_ibfk_1` FOREIGN KEY (`idContrato`) REFERENCES `contrato` (`idcontrato`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `contratocelular_ibfk_2` FOREIGN KEY (`idCelular`) REFERENCES `celular` (`idCelular`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratoCelular`
--

LOCK TABLES `contratoCelular` WRITE;
/*!40000 ALTER TABLE `contratoCelular` DISABLE KEYS */;
/*!40000 ALTER TABLE `contratoCelular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contratoFija`
--

DROP TABLE IF EXISTS `contratoFija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contratoFija` (
  `idContrato` int DEFAULT NULL,
  `idTelFija` int DEFAULT NULL,
  KEY `idContrato` (`idContrato`),
  KEY `idTelFija` (`idTelFija`),
  CONSTRAINT `contratofija_ibfk_1` FOREIGN KEY (`idContrato`) REFERENCES `contrato` (`idcontrato`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `contratofija_ibfk_2` FOREIGN KEY (`idTelFija`) REFERENCES `telefoniaFija` (`idTelFija`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratoFija`
--

LOCK TABLES `contratoFija` WRITE;
/*!40000 ALTER TABLE `contratoFija` DISABLE KEYS */;
INSERT INTO `contratoFija` VALUES (38,4),(40,1);
/*!40000 ALTER TABLE `contratoFija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contratoInternet`
--

DROP TABLE IF EXISTS `contratoInternet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contratoInternet` (
  `idContrato` int DEFAULT NULL,
  `idInternet` int DEFAULT NULL,
  KEY `idContrato` (`idContrato`),
  KEY `idInternet` (`idInternet`),
  CONSTRAINT `contratointernet_ibfk_1` FOREIGN KEY (`idContrato`) REFERENCES `contrato` (`idcontrato`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `contratointernet_ibfk_2` FOREIGN KEY (`idInternet`) REFERENCES `internet` (`idInternet`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratoInternet`
--

LOCK TABLES `contratoInternet` WRITE;
/*!40000 ALTER TABLE `contratoInternet` DISABLE KEYS */;
INSERT INTO `contratoInternet` VALUES (37,NULL),(38,4),(39,6),(39,7),(40,5),(41,6),(41,15),(41,11);
/*!40000 ALTER TABLE `contratoInternet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contratoMovil`
--

DROP TABLE IF EXISTS `contratoMovil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contratoMovil` (
  `idContrato` int DEFAULT NULL,
  `idTelMovil` int DEFAULT NULL,
  KEY `idContrato` (`idContrato`),
  KEY `idTelMovil` (`idTelMovil`),
  CONSTRAINT `contratomovil_ibfk_1` FOREIGN KEY (`idContrato`) REFERENCES `contrato` (`idcontrato`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `contratomovil_ibfk_2` FOREIGN KEY (`idTelMovil`) REFERENCES `telefoniaMovil` (`idTelMovil`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratoMovil`
--

LOCK TABLES `contratoMovil` WRITE;
/*!40000 ALTER TABLE `contratoMovil` DISABLE KEYS */;
/*!40000 ALTER TABLE `contratoMovil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internet`
--

DROP TABLE IF EXISTS `internet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internet` (
  `idInternet` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `velocidad` int DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idInternet`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internet`
--

LOCK TABLES `internet` WRITE;
/*!40000 ALTER TABLE `internet` DISABLE KEYS */;
INSERT INTO `internet` VALUES (4,'Velocidad simétrica 30mb','Velocidades simétricas de 30mb',30,15000.00),(5,'Velocidad simétrica 50mb','Velocidades simétricas de 50mb',50,20000.00),(6,'Velocidad simétrica 100mb','Velocidades simétricas de 100mb',100,30000.00),(7,'Velocidad simétrica 200mb','Velocidades simétricas de 200mb',200,40000.00),(8,'Internet + línea fija 30mb','Internet + línea fija de 30mb',30,18000.00),(9,'Internet + línea fija 50mb','Internet + línea fija de 50mb',50,22000.00),(10,'Internet + línea fija 100mb','Internet + línea fija de 100mb',100,32000.00),(11,'Internet + línea fija 200mb','Internet + línea fija de 200mb',200,42000.00),(12,'Paquete full 30mb','Paquete full: línea + movil + internet de 30mb',30,25000.00),(13,'Paquete full 50mb','Paquete full: línea + movil + internet de 50mb',50,30000.00),(14,'Paquete full 100mb','Paquete full: línea + movil + internet de 100mb',100,40000.00),(15,'Paquete full 200mb','Paquete full: línea + movil + internet de 200mb',200,50000.00);
/*!40000 ALTER TABLE `internet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefoniaFija`
--

DROP TABLE IF EXISTS `telefoniaFija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefoniaFija` (
  `idTelFija` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `tarifa` decimal(10,2) DEFAULT NULL,
  `minutos` int DEFAULT NULL,
  `costoMinutos` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idTelFija`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefoniaFija`
--

LOCK TABLES `telefoniaFija` WRITE;
/*!40000 ALTER TABLE `telefoniaFija` DISABLE KEYS */;
INSERT INTO `telefoniaFija` VALUES (1,'Telefonía fija pro','Plan pro lo mejor de todos los planes disponibles',66.00,700,34.00),(4,'Telefonía fija 1','Plan de telefonía fija básica. Unicamente lo que necesitas',4000.00,700,34.00),(5,'Telefonía fija 2','Plan fijo con tarifa adicional hacia otro operador.',4000.00,700,40.00),(6,'Telefonía fija 3','Plan fijo con tarifa adicional de movil sin importar el operador.',4000.00,700,36.00);
/*!40000 ALTER TABLE `telefoniaFija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefoniaMovil`
--

DROP TABLE IF EXISTS `telefoniaMovil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefoniaMovil` (
  `idTelMovil` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `tipo` varchar(15) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idTelMovil`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefoniaMovil`
--

LOCK TABLES `telefoniaMovil` WRITE;
/*!40000 ALTER TABLE `telefoniaMovil` DISABLE KEYS */;
INSERT INTO `telefoniaMovil` VALUES (1,'Prepago 3','Línea móvil ','prepago...',7000.00),(2,'Postpago 1','Línea móvil postpago','Postpago',10000.00),(3,'Postpago 2','Línea móvil postpago + celular','Postpago plus',2000.00),(7,'Plan prepago','Plan de telefonía','Prepago',1000.00),(8,'Plan postpago 1','Plan de telefonía móvil postpago: línea telefonía','Postpago',9000.00),(9,'Plan postpago 2','Plan de telefonía móvil postpago: línea telefonía y celular','Postpago',16000.00);
/*!40000 ALTER TABLE `telefoniaMovil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `idLaboral` int NOT NULL AUTO_INCREMENT,
  `puesto` varchar(15) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idLaboral`)
) ENGINE=InnoDB AUTO_INCREMENT=202102 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (123,'Alejandro','Blanco',444,'Gerente','ger2021'),(0,'Tony','Peña',999,'Agente','ag999'),(5555,'Angel','Villalobos',2020,'Gerente','pass'),(0,'Angel','Villa',2121,'Agente','tony');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-29 21:03:19
