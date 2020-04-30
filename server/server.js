const express = require('express');
const formidable = require('formidable'); 
const app = express();
const path= require('path');
const cors= require('cors');


app.use(cors);

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

    });


});

app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000 ...');
});