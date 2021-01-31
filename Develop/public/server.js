const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))
  })
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
  })
  app.get('/api/notes', function (req, res) {
    res.send('hello world')
  })
  app.post('/api/notes', function (req, res) {
    res.send('hello world')
  })

  app.delete('/api/notes', function (req, res) {
    res.send('hello world')
  })

  app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
  });
  