import React from 'react';
import styles from './Messages.module.css';
//import Images from './Images';


import { Chip } from '@material-ui/core';

const SentMessages = () => {
    return (
        <div className={styles.sent}>
            <Chip color="primary"
                label="text here"
                className={styles.chip}
                size="medium" />
        </div>
    );
}

export default SentMessages;