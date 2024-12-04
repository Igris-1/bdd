# Informe - TP de base de datos
Integrantes
> Nicolas Natale 108590

> Pedro Bubuli 103452

> Julian Sanchez 104590

# 1 Eleccion de tecnologias

Para este tp se hizo uso de las siguientes tecnologias:
 - Base de datos relacionales MySQL
 - Base de datos no relacional NoSQL con MongoDB
 - HTML5 para la interfaz grafica
 - JavaScript para el back end

La combinación de HTML5, CSS, JavaScript, Node.js con Express.js, MySQL y MongoDB fue elegida porque ofrece:

Compatibilidad entre sistemas: Soporte para frontend dinámico y backend escalable.
Flexibilidad: Integración sencilla con tecnologías modernas.
Rendimiento: Adecuado para manejar datos estructurados y no estructurados en un solo sistema.


### Archivos principales

- Se cuenta con un archivo **index.html** que es la interfaz grafica, dentro de la misma se prodra intercambiar entre base de dato *relacional* (MySQL) y una no *relacional* (NoSQL - MongoDB) como asi poder visualizar y modificar los registros
- Un archivo **send.js** para manejar los envios
- Un **back.js** para manejar el form del la interfaz grafica
- un **server.js** para manejar MongoDB y MySQL

# 2 Diagrama de Arquitectura:
> [Diagrama de arquitectura](https://github.com/Igris-1/bdd/blob/main/diagrama_de_arquitectura.jpeg)

# 3 Configuración y Conexión a Bases de Datos:

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

### configurar Mysql
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

### configurar MongoDB:
No necesitas configuraciones adicionales. MongoDB creará la base y la colección automáticamente.

### Levantar el server
```
node server.js
```

Puertos donde se levanta el server, la base de datos y el front
- Frontend (Live Server o similar)	5500 / 3000 (default)
- Backend (Node.js/Express)	3000 (default)
- MySQL	3306 (default)
- MongoDB	27017 (default)

# 4 Descripción de Funcionalidades CRUD:
> Luego de levantar el backend, el front puede levantarse en localhost sin ningun problema para probar el guardado, elimininacion, modificacion y visualizacion de registros (funciones CRUD)

# 5 Comparación entre Bases de Datos Relacionales y NoSQL:
Base de Datos NoSQL (MongoDB)
Ventajas:
- Flexibilidad del Esquema: Los datos se almacenan en documentos JSON, lo que permite cambios rápidos en la estructura de los datos.
- Escalabilidad Horizontal: MongoDB permite agregar más servidores fácilmente para distribuir la carga.
- Velocidad en Lecturas/Escrituras: Para datos no estructurados o semi-estructurados, MongoDB puede ser más rápido que una base relacional.

Desventajas:
- Menor Consistencia: MongoDB utiliza un modelo eventual para garantizar la consistencia, lo que puede no ser adecuado para todas las aplicaciones.
- Falta de Relaciones: No es ideal para datos que necesitan relaciones complejas (no tiene claves foráneas ni JOINs).
- Sobrecarga de Datos Repetidos: Al no haber normalización, los datos pueden ser redundantes y ocupar más espacio.

¿Cuándo Usar Cada Tipo de Base de Datos?
Usar una Base Relacional (MySQL):
- Aplicaciones con Alta Estructuración: Ideal para sistemas como ERP, CRM o sitios de e-commerce donde las relaciones entre los datos son críticas.
- Integridad Crítica de Datos: Por ejemplo, sistemas bancarios o de contabilidad donde los errores son inaceptables.
- Consultas Complejas: Requieren filtros avanzados o relaciones complejas entre entidades.

Usar una Base NoSQL (MongoDB):
- Datos No Estructurados o Semi-Estructurados: Como perfiles de usuario con atributos personalizados, documentos o logs.
- Escalabilidad y Altas Escrituras: Aplicaciones que manejan grandes volúmenes de datos o necesitan escribir información rápidamente, como redes sociales o análisis en tiempo real.
- Desarrollo Ágil: Proyectos donde los requisitos del esquema pueden cambiar con frecuencia, como prototipos o aplicaciones modernas.

La elección entre MySQL y MongoDB depende del contexto y los requerimientos de la aplicación: estructura y relaciones complejas favorecen a MySQL, mientras que flexibilidad y escalabilidad horizontal hacen de MongoDB la mejor opción.
