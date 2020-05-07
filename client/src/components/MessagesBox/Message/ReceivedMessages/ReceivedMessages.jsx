import React from 'react';
import styles from './ReceivedMessages.module.css';

import FileType from './FileType';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


import { Chip,Typography, IconButton } from '@material-ui/core';


const ReceivedMessages = ({text, user, type, path}) => {

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


    const message = ()=>{
        return (<div className={styles.container}>
                {   (type =="message") ?(
                        <Chip color="secondary"
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
    )
    }

    return (
        <>
        {
            user ? message(): null
        }
        </>
    )
}

export default ReceivedMessages;

