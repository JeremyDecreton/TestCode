//Code API

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jcvanquotes'
});

// Middleware pour autoriser les requêtes CORS 
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//Pour le Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    pool.query('SELECT quote FROM quotes ORDER BY RAND() LIMIT 1', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération de la citation:', error);
            response.status(500).json({ error: 'Erreur lors de la récupération de la citation.' });
            return;
        }
        if (results.length === 0) {
            response.status(404).json({ error: 'Aucune citation trouvée.' });
            return;
        }
        response.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});


