import React from 'react';
import styles from '../Messages.module.css';
import {Link} from 'react-router-dom';

import FileViewer from 'react-file-viewer';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import { Chip,Typography } from '@material-ui/core';

const SentMessages = ({text, user, type, path}) => {
    

    return (
        <div className={styles.sent}>
            {path === null ?(
            <Chip color="primary"
                label={text}
                className={styles.schip}
                size="medium" />)
            :(
                <div className={styles.schip}>
                    <FileViewer
                    fileType={type.split("/")[1]}
                    filePath={`http://localhost:5000/uploads/${path}`}                
                    />
                    <Link to={`http://localhost:5000/uploads/${path}`} target="__blank" 
                                    download={`${path}`}>
                    <CloudDownloadIcon />
                    </Link>
               </div>
            )
            }
            <Typography variant="caption" className={styles.suser}>
                -{user}
            </Typography>
        </div>
    );
}

export default SentMessages;