const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))
//look at public to serve up static files



app.get('/notes',  (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  })
  app.get('/api/notes',  (req, res) => {
  
    fs.readFile('./db/db.json', 'utf8', (err, data) =>{ 
    
      res.json(data)
  });
  })


  // app.get('/api/notes/:routename',  (req, res) => {
  //   console.log(req.params)
  //   res.end()
  // })

  // app.post('/api/notes/:routename',  (req, res) => {


  //   res.send('hello world')
  // })

  // app.delete('/api/notes/:routename', (req, res) => {


  //   res.send('hello world')
  // })

  app.get('*',  (req, res) => {
    console.log("index.html2")
    res.sendFile(path.join(__dirname, "./public/index.html"))
  })
  app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
  });
  