import React from 'react';
import styles from './SentMessages.module.css';
import FileType from './FileType';

//import FileViewer from 'react-file-viewer';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import { Chip,Typography, IconButton } from '@material-ui/core';

const SentMessages = ({text, user, type, path}) => {
    
    const downloadFile = () => {
		fetch(`http://localhost:5000/uploads/${path}`)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = path;
					a.click();
				});
        });
    }

    return (
        <div className={styles.container}>
            {path === null ?(
            <Chip color="primary"
                label={text}
                className={styles.chip}
                size="medium" />)
            :(  
                <>
                <div className={styles.chip}>
                    <FileType path={path} type={type} />
                </div>
                <IconButton onClick={downloadFile} className={styles.download} component="div">
                        <CloudDownloadIcon />
                </IconButton>
               </>
            )
            }
            <Typography variant="caption" className={styles.user}>
                -{user}
            </Typography>
        </div>
    );
}

export default SentMessages;

/*
<Link to={`http://download.localhost:5000/uploads/${path}`} rel="external "
                                target="__blank"    download={`${path}`}>
                    <CloudDownloadIcon />
                    </Link>*/