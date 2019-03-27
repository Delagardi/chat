import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <AccessAlarm/>
      </CssBaseline>
    );
  }
}

export default App;
