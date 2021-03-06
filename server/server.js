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
  app.use('/uploads' ,express.static(__dirname + '/uploads'));

  const {addUser, getUser ,getUsersInRoom, removeUser} = require('./user');


const upload = require('./upload');
app.use('/upload',upload);

  app.get('/data/:room',(req,res)=>{
    users= getUsersInRoom(req.params.name);
    res.send({users});
  });

  io.on('connection', (socket) => {
    socket.on('join',({name , room}, callback)=>{
        const {error, user} = addUser({id:socket.id, name, room});

        if (error){ 
          return callback(error);
        }

        socket.emit('message', {user:'admin', text:`${user.name} has joined!`,type:"message", path: null});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined!`,type:"message", path: null});

        socket.join(user.room);
        
        callback();
    });

    socket.on('sendMessage', (message, callback)=>{
      const user = getUser(socket.id);      
      io.to(user.room).emit('message', {user: user.name, text:message,type:"message", path: null});

      callback();
    });

    //HANDLING RECIEVING AND SENDING FILE
    socket.on('sendFile', (path, callback)=>{
      const user = getUser(socket.id);      
      io.to(user.room).emit('file', path);
      callback();
    });

    socket.on('disconnect', () => { 
      const user = removeUser(socket.id);
      io.to(user.room).emit('message', {user: 'admin', text:`${user.name} has left the Room`,type:"message", path: null});
    });
  });



  


server.listen(port, ()=> console.log("Running"));






