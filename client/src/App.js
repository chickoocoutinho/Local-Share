import React, {Component} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {ReactComponent as TitleLogo} from './images/Local Share.svg';
import axios from 'axios';
import BACKEND_URL from '../backendIP.js';


import {Chat , DeviceList} from './components';

import { Container } from '@material-ui/core';

class App extends Component {
  state = { 
    room1: [],
    room2: [],
   }
  componentDidMount() {
    axios.get(`http://${BACKEND_URL}/data/room1`)
    .then(response =>{
      this.setState({room1:response.users})
    });

    axios.get(`http://${BACKEND_URL}/data/room2`)
    .then(response =>{
      this.setState({room2:response.users})
    });
  }
  render() {
    const {room1, room2, server} = this.state;
    return (
      <Router >
        <Container maxWidth="sm">
          <a href='/'>
            <TitleLogo />
          </a>
          <Route path='/' exact render={()=>
                    <DeviceList room1={room1} room2={room2}/>} />
          <Route path='/1' render={()=> <Chat room={room1} id="Room 1" /> } />
          <Route path='/2' render={()=> <Chat room={room2} id="Room 2" /> } />
          <Route path='/3' render={()=> <Chat room={server} id="Server" /> } />
        </Container>
      </Router>
    );
  }
}

export default App;