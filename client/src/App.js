import React, {Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import {ReactComponent as TitleLogo} from './images/Local Share.svg';

import {Chat , DeviceList} from './components';
//import styles from './app.module.css';

import { Container } from '@material-ui/core';

class App extends Component {
  state = {  }
  render() {
    return (
      <Router >
        <Container maxWidth="sm">
          <TitleLogo />
          <Route path='/' exact component={DeviceList} />
          <Route path='/room/:id' component={Chat} />
        </Container>
      </Router>
    );
  }
}

export default App;