import React from 'react';
import FileViewer from 'react-file-viewer';
import styles from './Messages.module.css';


const File = ({path , type}) => {
    return (
        <FileViewer
        fileType={type}
        filePath={`/home/coutinho/Documents/Node/local_share_2.0/server/uploads/${path}`}
        className={styles.schip}
        />
    );
}

export default File;