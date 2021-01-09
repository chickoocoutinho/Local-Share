import React from 'react';
import styles from './ReceivedMessages.module.css';

import AttachmentIcon from '@material-ui/icons/Attachment';
import { Chip } from '@material-ui/core';

import BACKEND_URL from '../../../../backendIP.js';


const FileType = ({type, path}) => {

    const display = ()=>{
        switch(type.split('/')[0]){
            case 'image':
                return (
                    <img src={`http://${BACKEND_URL}/uploads/${path}`} alt={path}
                                className={styles.media} />
                );
                break;
            case 'video':
                return (
                    <video src={`http://${BACKEND_URL}/uploads/${path}`} className={styles.media} controls>
                            Your browser does not support Video Tag
                    </video>
                );
                break;
            default:
                return (<Chip color="secondary" icon={<AttachmentIcon />} className={styles.media} />);
        }
    };

    return (
        <>
        {display()}
        </>
    );
}

export default FileType;