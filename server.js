"use strict"
const express = require('express');
const app = express();
const path = require('path');

//Renders your static files
app.use(express.static('public'))

app.get('*', (req, res) => {
 res.sendfile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
 console.log("SERVER STARTED");
});
