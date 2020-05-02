const express = require('express');
const formidable = require('formidable'); 
const app = express();
const path= require('path');
const cors= require('cors');


  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  


app.listen(5000, () => {
  console.log('Server listening on http://localhost:3000 ...');
});