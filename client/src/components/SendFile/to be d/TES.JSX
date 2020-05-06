import React, {Component} from 'react';
//import {DropzoneDialog} from 'material-ui-dropzone';
import {IconButton} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';

import Dropzone from 'react-dropzone';


class SendFile extends Component {
    /*state = {
        open: false,
        file: [],
    }
    openDropZone= ()=>{
        this.setState({
            open: true
        });
    };
    handleClose=()=>{
        this.setState({
            open:false
        });
    };
    handleSave= (files)=>{
        this.setState({
            file: files,
            open:false
        }); 
        let form = new FormData();
        const config= {
            header: { 'content-type': 'multipart/form-data' }
        }
        for(let x=0; x<this.state.file.length; x++){
            form.append("file", this.state.file[0] );
            console.log(this.state.file)
            }

        axios.post('http://localhost:5000/upload', form, config)

    };*/

    handleSend= (event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/upload', event.target);
    }


    onDrop = (files) => {
        console.log(files)





        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

        formData.append("file", files[0])

        axios.post('http://localhost:5000/upload', formData, config)
            .then(response => {
                    console.log("working")
                    
                })
            
    }

    render() {
        return (
            <div>
                    <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <button>
                                   upload
                                </button>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
        );
    }
}

export default SendFile;
