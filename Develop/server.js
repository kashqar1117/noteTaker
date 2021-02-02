const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const { json } = require('express')
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
    
      console.log(JSON.parse(data).id)
  });
  })


  //post 

  //create a note
  app.post('/api/notes' ,(req, res) =>
  {

    const newNote = req.body
    
    

    fs.readFile('./db/db.json', 'utf8', (err, data) =>{
   
      const updatedData  = JSON.parse(data).concat(newNote)
    
      fs.writeFile('./db/db.json', JSON.stringify(updatedData), (err, data) =>
      {
          res.json({"name" : "true"})
      })
    })
  })

    // npm uuid (google)
    //add and id , add a key to object
    //use the id to be able to delete posts
    //us id to be able to update posts 



  app.get('*',  (req, res) => {
    console.log("index.html2")
    res.sendFile(path.join(__dirname, "./public/index.html"))
  })
  app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
  });
  