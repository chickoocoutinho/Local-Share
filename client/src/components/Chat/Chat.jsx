import React,{useState, useEffect} from 'react';
import styles from './Chat.module.css';
import Messages from '../MessagesBox/Messages';
import InputField from '../InputField/InputField';
import Displaybar from '../DisplayBar/Displaybar';


import { Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import io from 'socket.io-client';
let socket;

//id is the room name and room contains the members of that room
const Chat = ({id, room}) => {
    const [username, setUsername]= useState('');
    const {state} = useLocation();

    const [message, setMessage]= useState('');
    const [messages, setMessages]= useState([]);
    const ENDPOINT= "localhost:5000";

    useEffect(()=>{
        if (username){ //triggered only when username is not blank
        //handling socket io
        socket= io(ENDPOINT);
        
        socket.emit('join', { name: username, room: id},()=> console.log('joined'));
        //join has error callback
        
        return(()=>{
            socket.emit('disconnect');
            socket.off();
        });
        }
    },[ENDPOINT,username]);
    
    //handling messages receiving
    useEffect(()=>{
        if(socket){
            socket.on('message', (message)=>{
                setMessages([...messages, message]);
            })
        }        
    },[messages,socket,username]);


    useEffect(()=>{
        //handling passing username from link
        setUsername(state.username);
    },[state]); 

    const sendMessage = (event)=>{
        if(message){
            socket.emit('sendMessage',message,()=> setMessage(''));
        }
    };




    //handle send file to input
    return (
        <Paper elevation={3} className={styles.chatBox}>
        <Displaybar roomName={id} />
        <Messages room={room} messages={messages} name={username} />
        <InputField handleMessageChange={setMessage} handleSendMessage={sendMessage} message={message}/>
        </Paper>
    );
}

export default Chat;