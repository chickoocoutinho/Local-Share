import React from 'react';
import styles from './Messages.module.css';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';
import Image from './Image';
import Video from './Video';
 
const Messages = () => {
    return (
        <div className={styles.container}>
            <SentMessages />
            <ReceivedMessages />
        </div>
    );
}

export default Messages;