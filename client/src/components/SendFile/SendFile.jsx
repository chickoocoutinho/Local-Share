import React, {useState, useEffect} from 'react';
import {IconButton} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';

import Dropzone from 'react-dropzone';


const SendFile = ({setPath, name}) => {

    
    //const [path, setPath] = useState('');
    

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
            formData.append("file", files[0])
            let {path , type}= files[0];
            setPath({user: name , text:null, path , type});    
        
        axios.post('http://192.168.1.9:5000/upload', formData, config)
            .then(response => {
                //handle response
            })            
    }

        return (
            <div>
                    <Dropzone onDrop={onDrop} multiple={false}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <IconButton >
                                     <CloudUploadIcon fontSize="medium" /> 
                                </IconButton>
                            </div>
                        </section>
                    )}
                    </Dropzone>
            </div>
        );
    }

export default SendFile;
