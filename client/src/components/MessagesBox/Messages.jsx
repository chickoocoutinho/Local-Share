import React, {useState, useEffect} from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';

const Messages = ({messages , name, socket, path}) => {

    return (
        <div className={styles.container}>
            {messages.map((message, i)=> <div key={i}> <Message message={message} path={path}
                                        name={name} socket={socket}/> </div>)}
        </div>
    );
}

export default Messages;