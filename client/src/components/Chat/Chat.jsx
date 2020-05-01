import React from 'react';
import styles from './Chat.module.css';
import Messages from '../Messages/Messages';
import InputField from '../InputField/InputField';
import Displaybar from '../DisplayBar/Displaybar';


import { Paper } from '@material-ui/core';

const Chat = () => {
    return (
       <Paper elevation={3} className={styles.chatBox}>
            <Displaybar />
            <Messages />
            <InputField />
       </Paper>
    );
}

export default Chat;