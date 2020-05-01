import React, {Component} from 'react';
import {DropzoneDialog} from 'material-ui-dropzone';
import {Button} from '@material-ui/core';
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
        axios.post('http://localhost:5000/upload',this.state);
    };
    render() {
        return (
            <div>
                <Button startIcon={ <CloudUploadIcon />} onClick={this.openDropZone} />
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