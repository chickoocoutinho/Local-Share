const path= require('path');
const formidable = require('formidable'); 

const cors= require('cors');
const fs = require('fs');

const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server= http.createServer(app);
const io= socketio(server);
const port= process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const {addUser, getUser ,getUsersInRoom, removeUser} = require('./user');


const upload = require('./upload');
app.use('/upload',upload);

let uploaded= false;
let progress= 0;

  io.on('connection', (socket) => {
    socket.on('join',({name , room}, callback)=>{
        const {error, user} = addUser({id:socket.id, name, room});

        if (error){
          return callback(error);
        }

        socket.emit('message', {user:'admin', text:`${user.name} has joined!`});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined!`});

        socket.join(user.room);
        
        callback();
    });

    socket.on('sendMessage', (message, callback)=>{
      const user = getUser(socket.id);      
      console.log(user);
      io.to(user.room).emit('message', {user: user.name, text:message ,type:"text"});

      callback();
    });



    socket.on('disconnect', () => { 
      const user = removeUser(socket.id);
      console.log(user);
      io.to(user.room).emit('message', {user: 'admin', text:`${user.name} has left the Room`});
    });
  });



  


server.listen(port, ()=> console.log("Running"));






