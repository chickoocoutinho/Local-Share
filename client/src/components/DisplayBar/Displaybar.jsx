import React, {Component} from 'react';
import styles from './DisplayBar.module.css';
import {Redirect} from 'react-router-dom';

import {AppBar, Typography, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import CancelIcon from '@material-ui/icons/Cancel';

class Displaybar extends Component {
    state = { 
        redirect: false
    };
    handleRedirect = ()=>{
        this.setState({ redirect: true });
    };
    render() {
        if(this.state.redirect){
           return <Redirect to='/' />
        }

        return (        
            <AppBar position='relative' className={styles.header} elevation={0}>
                    <ChatIcon />
                    <Typography variant="h6" className={styles.heading} >{this.props.roomName}</Typography>
                    <IconButton color="inherit" onClick={this.handleRedirect}>
                        <CancelIcon />
                    </IconButton>
            </AppBar>
        );
    }
}

export default Displaybar;