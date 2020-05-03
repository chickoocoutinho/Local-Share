import React from 'react';
import styles from '../Messages.module.css';

import { Chip, Typography } from '@material-ui/core';

const ReceivedMessages = ({text, user}) => {
    return (
        <div className={styles.received}>
            <Chip color="secondary"
                label={text}
                className={styles.rchip}
                size="medium" />
            <Typography variant="caption" className={styles.ruser}>
                -{user}
            </Typography>

        </div>
    );
}

export default ReceivedMessages;