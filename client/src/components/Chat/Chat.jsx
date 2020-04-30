import React from 'react';
import styles from './Chat.module.css'

import { Paper, AppBar, Typography, Chip, TextField } from '@material-ui/core';

const Chat = () => {
    return (
       <Paper elevation={3} className={styles.chatBox}>
           <AppBar position='relative' className={styles.header} elevation={0}>
               <Typography variant="h6" >Device Name</Typography>
           </AppBar>

           <div className={styles.sent}>
                <Chip size="small" color="primary" label="snt text" className={styles.sentText} />
           </div>
           <TextField id="standard-basic" label="Standard" />
       </Paper>
    );
}

export default Chat;