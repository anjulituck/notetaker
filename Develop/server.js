const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

//represent the instance of express
const app = express(); 

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//for static files
app.use(express.static(path.join(__dirname, 'public')));


// HTML ROUTES

//retrieving notes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')))

// retrieving index
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

// API ROUTES








// listening at this port and do this
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
