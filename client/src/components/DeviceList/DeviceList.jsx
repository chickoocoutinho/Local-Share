import React, {useState} from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ExpansionPanel, ExpansionPanelSummary, FormHelperText, ExpansionPanelDetails, Link, ExpansionPanelActions, Typography, TextField, StylesProvider } from '@material-ui/core';

import styles from './DeviceList.module.css';

const DeviceList = ({room1, room2 }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState([true, true, true]);

    const innerText= [{ name:"Room 1", users:room1},
            {name:"Room 2", users:room2}, 
            { name:"Server", users:["Send Files to the Laptop"]}];

    const closePanel = (expanded)=>{
        return (expanded? null: setUsername(''));
    }

    //Error Handling

    return (
        <div>
            {innerText.map((element, key)=>{
                return (<ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} 
                        onChange={({expanded})=> closePanel(expanded)}>
                    <Typography varient='h6'>{element.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography varient='body-2'>
                       {element.users.length? element.users.map(name=> ` ${name} `):"Empty"}
                    </Typography>
                </ExpansionPanelDetails>
                <ExpansionPanelActions className={styles.grid}>
                <TextField id="username" label="Username" error={error[key]} className={styles.input}
                                placeholder="Enter Username to Join a Room" onChange={(e)=>{setUsername(e.target.value)}} /> 
                    {error[key]?(<FormHelperText error className={styles.error}>Enter Different Username</FormHelperText>):null}
                    <Link href={{
                        pathname:`/${key+1}`,
                        state:{ username }
                        }} className={styles.join}>Join</Link>
                </ExpansionPanelActions>
                </ExpansionPanel>)
            })}
        </div>
    );
}

export default DeviceList;