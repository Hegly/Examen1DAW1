-- Active: 1705534014031@@localhost@5432@api_jardin_botanico@public
CREATE TABLE tbl_usuarios
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200),
    correo VARCHAR (100),
    contraseña VARCHAR(100),
    creado TIMESTAMP DEFAULT current_timestamp  
)

CREATE TABLE tbl_plantas
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200),
    especie VARCHAR (200),
    descripcion VARCHAR(1000),
    fecha_plantacion DATE,
    id_usuarios INT,
    FOREIGN KEY (id_usuarios) REFERENCES tbl_usuarios(id)
)

CREATE TABLE tbl_entradas_salidas
(
    id serial primary key,
    tipo VARCHAR(10) CHECK (tipo IN ('ENTRADA', 'SALIDA')),
    fecha DATE,
    cantidad INT,
    id_plantas INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id)
)

CREATE TABLE tbl_cuidados
(
    id SERIAL PRIMARY KEY,
    tipo_cuidado VARCHAR(100),
    fecha DATE,
    observaciones TEXT,
    id_plantas INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id)
);

CREATE TABLE tbl_ubicacion
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(500)
);

CREATE TABLE tbl_plantasubicacion
(
    id_plantas INT,
    id_ubicacion INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id),
    FOREIGN KEY (id_ubicacion) REFERENCES tbl_ubicacion(id),
    PRIMARY KEY (id_plantas, id_ubicacion)
);

CREATE TABLE tbl_categorias
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(500)
);

CREATE TABLE tbl_plantascategorias
(
    id_plantas INT,
    id_categorias INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id),
    FOREIGN KEY (id_categorias) REFERENCES tbl_categorias(id),
    PRIMARY KEY (id_plantas, id_categorias)
);

CREATE TABLE tbl_eventos 
(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    descripcion VARCHAR(500),
    fecha DATE,
    lugar VARCHAR(100)
);

CREATE TABLE tbl_pesticidas
(
    id SERIAL PRIMARY KEY,
    tipo_pesticida VARCHAR(100),
    fecha_aplicacion DATE,
    cantidad_aplicada INT,
    id_plantas INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id)
);

CREATE TABLE tbl_zonas
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    id_plantas INT,
    FOREIGN KEY (id_plantas) REFERENCES tbl_plantas(id),
    creado TIMESTAMP DEFAULT current_timestamp
);