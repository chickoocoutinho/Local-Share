import React, {useEffect} from 'react';
import styles from '../Messages.module.css';


import { Chip,Typography } from '@material-ui/core';

const SentMessages = ({text, user, type, socket}) => {
    
    /*useEffect(()=>{
        let reader = new FileReader();
        reader.readAsDataURL(file)

        fs.writeFile("out.png", base64Data, 'base64', function(err) {
            console.log(err);
        });
    },[]);*/

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