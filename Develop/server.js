const express = require('express');
const fs = require('fs');
//universal unique identifier
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const port = process.env.port || 3001;

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
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')));
    res.json(notes);

});

// to add new notes and add to db as json
app.post('/api/notes', (req,res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json')));
    const newNotes = req.body;    
    newNotes.id = uuidv4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json,', JSON.stringify(notes));
    res.json(notes);

});

//to delete notes and remove from db
app.delete('/api/notes/:id', (req,res) => {


});


// listening at this port and do this
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
