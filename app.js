const express = require('express')

const app = express();

require('dotenv').config();
const port = process.env.PORT || 7000;

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//require database folder and function
const dbSetup = require('./db/database');
dbSetup();

app.listen(port, () => console.log(`app running on port ${port}`));