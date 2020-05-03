import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';

const Messages = ({messages , name}) => {
    return (
        <div className={styles.container}>
            {messages.map((message, i)=> <div key={i}> <Message message={message} name={name} /> </div>)}
        </div>
    );
}

export default Messages;