import React from 'react';
import styles from '../Messages.module.css';


import { Chip,Typography } from '@material-ui/core';

const SentMessages = ({text, user}) => {
    return (
        <div className={styles.sent}>
            <Chip color="primary"
                label={text}
                className={styles.schip}
                size="medium" />
            <Typography variant="caption" className={styles.suser}>
                -{user}
            </Typography>
        </div>
    );
}

export default SentMessages;