import React,{Component} from 'react';
import styles from './Chat.module.css';
import Messages from '../MessagesBox/Messages';
import InputField from '../InputField/InputField';
import Displaybar from '../DisplayBar/Displaybar';


import { Paper } from '@material-ui/core';

class Chat extends Component {
    state = { username: "" }
    
    componentDidMount() {
        this.setState({
            username: this.props.location.state
        })
    };

    render() {
        return (
            <Paper elevation={3} className={styles.chatBox}>
            <Displaybar roomName={this.props.id} />
            <Messages room={this.props.room} />
            <InputField />
            </Paper>
        );
    }
}

export default Chat;