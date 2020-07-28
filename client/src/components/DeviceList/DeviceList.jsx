import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ExpansionPanel, ExpansionPanelSummary, FormHelperText, ExpansionPanelDetails , ExpansionPanelActions, Typography, TextField } from '@material-ui/core';

import styles from './DeviceList.module.css';

const DeviceList = ({room1, room2 }) => {
    const [username, setUsername] = useState('');

    const innerText= [{ name:"Room 1", users:room1},
            {name:"Room 2", users:room2}, 
            { name:"Server", users:["Send Files to the Laptop"]}];


    //Error Handling

    return (
        <div>
            {innerText.map((element, key)=>{
                return (<ExpansionPanel id={key}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography varient='h6'>{element.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography varient='body-2'>
                       {element.users? element.users.map(name=> ` ${name} `):"Empty"}
                    </Typography>
                </ExpansionPanelDetails>
                <ExpansionPanelActions className={styles.grid}>
                <TextField id={`username${key}`} label="Username" className={styles.input} value={username}
                                placeholder="Join a Room" onChange={(e)=>{setUsername(e.target.value)}} /> 
                     <FormHelperText className={styles.helperText}>Enter Username</FormHelperText>
                    <Link to={{
                        pathname:`/${key+1}`,
                        state:{ username: `${username}` }
                        }} className={styles.join}>
                        Join
                        </Link>
                </ExpansionPanelActions>
                </ExpansionPanel>)
            })}
        </div>
    );
}

export default DeviceList;