import React from 'react';
import styles from '../Messages.module.css';
import {Link} from 'react-router-dom';

import FileViewer from 'react-file-viewer';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import { Chip,Typography } from '@material-ui/core';

const ReceivedMessages = ({text, user, type, path}) => {
    return (
        <div className={styles.received}>
            {path === null ?(
            <Chip color="primary"
                label={text}
                className={styles.rchip}
                size="medium" />)
            :(
                <div className={styles.rchip}>
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
            <Typography variant="caption" className={styles.ruser}>
                -{user}
            </Typography>
        </div>
    );}

export default ReceivedMessages;
