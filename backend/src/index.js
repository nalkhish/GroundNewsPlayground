/** Main server */
const express = require('express');
const cors = require('cors')
const moment = require('moment');


/** Initiate */
const app = express();

/** Middleware */
app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** Routes */
app.use('/api/news', require('./news/router'));

/** Listen */
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
