# TP de base de datos

# Informe / metodo de utilización

Para este tp se hizo uso de las siguientes tecnologigias:
 - Base de datos relacionales MySQL
 - Base de datos no relacional NoSQL con MongoDB
 - HTML5 para la interfaz grafica
 - JavaScript para el back end


## Archivos principales

- Se cuenta con un archivo **index.html** que es la interfaz grafica, dentro de la misma se prodra intercambiar entre base de dato *relacional* (MySQL) y una no *relacional* (NoSQL - MongoDB) como asi poder visualizar y modificar los registros
- Un archivo **send.js** para manejar los envios
- Un **back.js** para manejar el form del la interfaz grafica
- un **server.js** para manejar MongoDB y MySQL


# Metodo de instalacion

Requerimientos:
- Node.js: Framework para manejar el servidor backend.
- Express: Para crear rutas y manejar solicitudes HTTP.
- MySQL: Cliente para interactuar con bases de datos relacionales.
- MongoDB: Cliente para conectarse a bases de datos NoSQL.

Instalar node.js para distros basadas en ubuntu, con permisos de root
```
sudo apt install nodejs npm
```
Instalar node.js para distros basadas en arch, con permisos de root
```
sudo pacman -Syyu
```


Instalar las dependecias (requerimientos anteriormente listados)
```
npm init -y
npm install express mysql2 mongoose body-parser
```

## configurar Mysql
Crea una tabla llamada records:

```
CREATE DATABASE your_mysql_database;
USE your_mysql_database;
CREATE TABLE records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
```

Verificamos que la tabla se creo
```
SHOW TABLES;
```

Deberia mostrar algo como
```
+----------------+
| Tables_in_your_mysql_database |
+----------------+
| records         |
+----------------+
```

Tambien podemos verificar la estructura de la tabla
```
DESCRIBE records;
```

Para salir de MySql solo basta con escribir en la terminal
```
exit
```

## configurar MongoDB:
No necesitas configuraciones adicionales. MongoDB creará la base y la colección automáticamente.

## Levantar el server
```
node server.js
```

Puertos donde se levanta el server, la base de datos y el front
- Frontend (Live Server o similar)	5500 / 3000 (default)
- Backend (Node.js/Express)	3000 (default)
- MySQL	3306 (default)
- MongoDB	27017 (default)
