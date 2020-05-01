import React from 'react';
import styles from './Chat.module.css';
import Messages from '../Messages/Messages';
import InputField from '../InputField/InputField';

import { Paper, AppBar, Typography} from '@material-ui/core';

const Chat = () => {
    return (
       <Paper elevation={3} className={styles.chatBox}>
            <AppBar position='relative' className={styles.header} elevation={0}>
                <Typography variant="h6" >Device Name</Typography>
            </AppBar>
            <Messages />
            <InputField />
       </Paper>
    );
}

export default Chat;