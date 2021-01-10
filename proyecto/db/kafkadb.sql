DROP DATABASE IF EXISTS kafkadb;
CREATE DATABASE kafkadb;
USE kafkadb;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` varchar(30) NOT NULL,
    `pass` varchar(30) NOT NULL,
    `nombre` varchar(30) NOT NULL,
    `apellido` varchar(30) NOT NULL,
    `fecha_nac` DATE NOT NULL,
    `correo` varchar(30) NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS verificador;
CREATE TABLE verificador
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS escritor;
CREATE TABLE escritor
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `verificado` BOOLEAN DEFAULT 0,
	PRIMARY KEY(`id`),
    CONSTRAINT `escritor_id` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`)
);

DROP TABLE IF EXISTS lector;
CREATE TABLE lector
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `direccion` varchar(30) NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `lector_id` FOREIGN KEY (`id`) REFERENCES `usuario` (`id`)
);

DROP TABLE IF EXISTS suscripcion;
CREATE TABLE suscripcion
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `idlector` INTEGER NOT NULL,
    `idescritor` INTEGER NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `suscripcionlector_id` FOREIGN KEY (`idlector`) REFERENCES `lector` (`id`),
    CONSTRAINT `suscripcionescritor_id` FOREIGN KEY (`idescritor`) REFERENCES `escritor` (`id`)
);

DROP TABLE IF EXISTS genero;
CREATE TABLE genero
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` varchar(30) NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS libro;
CREATE TABLE libro
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `idgenero` INTEGER NOT NULL,
    `titulo` varchar(30) NOT NULL,
    `fecha` DATE NOT NULL,
    `texto` TEXT NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `genero_id` FOREIGN KEY (`idgenero`) REFERENCES `genero` (`id`)
);

DROP TABLE IF EXISTS comentario;
CREATE TABLE comentario
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`fecha` DATE NOT NULL,
    `idlibro` INTEGER NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `libro_id` FOREIGN KEY (`idlibro`) REFERENCES `libro` (`id`)
);

DROP TABLE IF EXISTS seccion;
CREATE TABLE seccion
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `idlibro` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `libroseccion_id` FOREIGN KEY (`idlibro`) REFERENCES `libro` (`id`)
);

DROP TABLE IF EXISTS lectura;
CREATE TABLE lectura
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `idlibro` INTEGER NOT NULL,
    `idlector` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `librolectura_id` FOREIGN KEY (`idlibro`) REFERENCES `libro` (`id`),
	CONSTRAINT `lectorlectura_id` FOREIGN KEY (`idlector`) REFERENCES `lector` (`id`)
	);
    
DROP TABLE IF EXISTS aporte;
CREATE TABLE aporte
 (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
    `idseccion` INTEGER NOT NULL,
    `idlector` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
	PRIMARY KEY(`id`),
    CONSTRAINT `libroaporte_id` FOREIGN KEY (`idseccion`) REFERENCES `seccion` (`id`),
	CONSTRAINT `lectoraporte_id` FOREIGN KEY (`idlector`) REFERENCES `lector` (`id`)
	);