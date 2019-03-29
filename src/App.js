import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, Toolbar, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, InputBase } from '@material-ui/core';
// import { fade } from '@material-ui/core/styles/colorManipulator';


import users from './data/users';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing.unit * 3,
  // },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: 'auto',
  //   },
  // },
  inputRoot: {
    color: 'inherit',
    width: '90%',
    padding: '16px'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CssBaseline>
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Chat
          </Typography>
        </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left">
          <InputBase
            placeholder="Search charts…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
          <List>
            {users.map( (user) => (
              <ListItem button key={user.id}>
                <ListItemAvatar>
                  <Avatar>{user.username.substring(0,2).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.username} secondary={"Last visit: "+user.lastVisit}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <AccessAlarm/>
        <ThreeDRotation/>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(App);
