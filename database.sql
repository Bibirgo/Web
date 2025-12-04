-- Crear base de datos
CREATE DATABASE IF NOT EXISTS proyecto_seguro 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_general_ci;

USE proyecto_seguro;

-- ============================
-- TABLA: usuarios
-- ============================
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- ============================
-- TABLA: productos
-- ============================
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2) NOT NULL DEFAULT 0
);

-- ============================
-- TABLA: comentarios
-- ============================
CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    creado_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Datos opcionales
INSERT INTO productos (nombre, precio) VALUES
('Fresa Premium', 45.00),
('Fresa con crema', 35.00),
('Smoothie de fresa', 55.00);

INSERT INTO comentarios (texto) VALUES
('Hola, este es un comentario inicial!'),
('<script>alert("Intento XSS")</script>');
