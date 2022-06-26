
const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3000;

//represent the instance of express
const app = express(); 

//retrieving notes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')))

// retrieving index
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))


// listening at this port and do this
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
