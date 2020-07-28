import React from 'react';
import styles from './SentMessages.module.css';

import AttachmentIcon from '@material-ui/icons/Attachment';

import { Chip } from '@material-ui/core';


const FileType = ({type, path}) => {

    const display = ()=>{
        switch(type.split('/')[0]){
            case 'image':
                return (
                    <img src={`http://localhost:5000/uploads/${path}`} alt={path}
                                className={styles.media} />
                );
                break;
            case 'video':
                return (
                    <video src={`http://localhost:5000/uploads/${path}`} className={styles.media} controls>
                            Your browser does not support Video Tag
                    </video>
                );
                break;
            default:
                return (<Chip color="primary" icon={<AttachmentIcon />} className={styles.media}/>);
        }
    };

    return (
        <>
        {display()}
        </>
    );
}

export default FileType;