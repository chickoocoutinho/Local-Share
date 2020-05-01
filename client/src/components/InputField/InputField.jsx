import React from 'react';
import styles from './InputField.module.css';
import { Input, Fab } from '@material-ui/core';
import SendFile from '../SendFile/SendFile';
import SendIcon from '@material-ui/icons/Send';

const InputField = () => {
    return (
        <div className={styles.container}>
            <Input placeholder="Type a Message..." className={styles.input}/>
            <SendFile className={styles.File}/>
            <Fab
                variant="extended"
                color="primary"    >
                Send <SendIcon className={styles.marginLeft} />
            </Fab>
        </div>

    );
}

export default InputField;