import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Link, Typography } from '@material-ui/core';

const DeviceList = () => {
    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography varient='h6'>Room 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography varient='h6'>Room 1<br/></Typography>
                    <Link href='/room/1'>Join</Link>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography varient='h6'>Room 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography varient='h6'>Room 2</Typography><br />
                    <Link href='/room/1'>Join</Link>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography varient='h6'>Server</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography varient='h6'>Server</Typography><br />
                    <Link href='/room/1'>Join</Link>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default DeviceList;