const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Configuración de MySQL
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password',
    database: 'your_mysql_database'
});

// Conexión a MySQL
mysqlConnection.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
    } else {
        console.log('Conectado a MySQL.');
    }
});

// Configuración de MongoDB
const mongoUri = 'mongodb://localhost:27017/your_mongo_database';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB.'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema para MongoDB
const MongoSchema = new mongoose.Schema({
    name: String,
    email: String,
    flexibleData: Object
});
const MongoModel = mongoose.model('Record', MongoSchema);

// Rutas para MySQL
app.get('/mysql/records', (req, res) => {
    mysqlConnection.query('SELECT * FROM records', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener registros de MySQL.');
        } else {
            res.json(results);
        }
    });
});

app.post('/mysql/records', (req, res) => {
    const { name, email } = req.body;
    mysqlConnection.query('INSERT INTO records (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al insertar registro en MySQL.');
        } else {
            res.status(201).send('Registro agregado a MySQL.');
        }
    });
});

// Rutas para MongoDB
app.get('/mongodb/records', async (req, res) => {
    try {
        const records = await MongoModel.find();
        res.json(records);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener registros de MongoDB.');
    }
});

app.post('/mongodb/records', async (req, res) => {
    const { name, email, flexibleData } = req.body;
    const record = new MongoModel({ name, email, flexibleData });
    try {
        await record.save();
        res.status(201).send('Registro agregado a MongoDB.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al insertar registro en MongoDB.');
    }
});

// Servidor en escucha
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
