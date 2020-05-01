import React, {Component} from 'react';
import {DropzoneDialog} from 'material-ui-dropzone';
import {IconButton} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';

class SendFile extends Component {
    state = {
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
        /*const Form = new FormData();
        Form.append("file",files[0]);
        axios.post('http://localhost:5000/upload', Form)
        .then(res=>console.log(res)); */
    };
    render() {
        return (
            <div>
                <IconButton onClick={this.openDropZone}>
                    <CloudUploadIcon fontSize="medium" /> 
                </IconButton>
                <DropzoneDialog 
                showPreviews={true} 
                open={this.state.open}
                maxFileSize={5000000000}
                filesLimit={10}
                onSave={this.handleSave}
                onClose={this.handleClose}
                />
            </div>
        );
    }
}

export default SendFile;