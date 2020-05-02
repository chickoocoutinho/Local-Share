import React,{useState, useEffect} from 'react';
import styles from './Chat.module.css';
import Messages from '../MessagesBox/Messages';
import InputField from '../InputField/InputField';
import Displaybar from '../DisplayBar/Displaybar';


import { Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const Chat = ({id, room}) => {
    const [username, setUsername]= useState("");
    const location = useLocation();

    useEffect(()=>{
        setUsername(location.state.username)
    },[location]);

    return (
        <Paper elevation={3} className={styles.chatBox}>
        <Displaybar roomName={id} />
        <Messages room={room} />
        <InputField />
        </Paper>
    );
}

export default Chat;