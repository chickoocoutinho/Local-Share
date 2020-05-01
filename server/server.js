const express = require('express');
const formidable = require('formidable'); 
const app = express();
const path= require('path');
const cors= require('cors');


  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
  
  app.post('/upload', (req, res, next) => {
    const form = formidable({uploadDir:'./uploads' , keepExtentions: true, multiples: true});

    form.on ('fileBegin', function(name, file){
        file.path = form.uploadDir + "/" + file.name;
        });

 
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      res.send(
        `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <title>Share Files to Laptop</title>
     
        </head>
     
        <div class="container mx-auto py-2">
        <div class="alert alert-success">
        <strong>Success!</strong> File Uploaded
        </div>
        <br/>
        <a href="/" class="btn btn-primary" role="button">Upload another File</a>
        </div>`
    
          );
    });


});

app.listen(5000, () => {
  console.log('Server listening on http://localhost:3000 ...');
});