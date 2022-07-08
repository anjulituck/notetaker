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

// to save notes and add to db as json
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))

});

// to add new notes and add to db as json
app.post('/api/notes', (req,res) => {


});

//to delete notes and remove from db
app.delete('/api/notes/:id', (req,res) => {


});



// listening at this port and do this
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
