import React from 'react';
import styles from './InputField.module.css';
import { Input, Fab } from '@material-ui/core';
import SendFile from '../SendFile/SendFile';
import SendIcon from '@material-ui/icons/Send';

const InputField = ({handleMessageChange, handleSendMessage, message, socket, setPath }) => {
    //handle send file
    const sendMessage= (event)=>{
        handleSendMessage(event);
        handleMessageChange("")
    }
    
    return (
        <div className={styles.container}>
            <Input placeholder="Type a Message..." className={styles.input}
                        value={message} 
                        onChange={(e)=>handleMessageChange(e.target.value)}/>
            <SendFile className={styles.File} setPath={setPath}/>
            <Fab    
                onClick={(event)=>{sendMessage(event)}}
                onKeyPress={ event => event.key==='Enter'? sendMessage(event):null}
                variant="extended"
                color="primary"    >
                Send <SendIcon className={styles.marginLeft} />
            </Fab>
        </div>

    );
}

export default InputField;