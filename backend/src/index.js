/** Main server */
const express = require('express');


/** Initiate */
const app = express();

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** Routes */
app.use('/api/news', require('./news/router'));

/** Listen */
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
