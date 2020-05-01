import React from 'react';
import styles from './InputField.module.css';
import { Input } from '@material-ui/core';
import SendFile from '../SendFile/SendFile';

const InputField = () => {
    return (
        <div>
            <Input placeholder="Type a Message..." />
            <SendFile />
        </div>

    );
}

export default InputField;