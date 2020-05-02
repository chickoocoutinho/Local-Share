import React from 'react';
import styles from './Messages.module.css';

import { Chip } from '@material-ui/core';

const ReceivedMessages = () => {
    return (
        <div className={styles.received}>
            <Chip color="secondary"
                label="text here"
                className={styles.chip}
                size="medium" />
        </div>
    );
}

export default ReceivedMessages;