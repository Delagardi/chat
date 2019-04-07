import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, Toolbar, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, InputBase, Fab, Divider } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
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
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          anchor="left">
          <div className={classes.drawerHeader}>
            <InputBase
              fullWidth
              margin="normal"
              placeholder="Search chats..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <Divider />
          <List className={classes.chatsList}>
            {users.map( (user) => (
              <ListItem button key={user.id}>
                <ListItemAvatar>
                  <Avatar>{user.username.substring(0,2).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.username} secondary={"Last visit: "+user.lastVisit}/>
              </ListItem>
            ))}
          </List>
          <Fab 
            color="primary" 
            aria-label="Add" 
            className={classes.newChatButton}>
            <AddIcon />
          </Fab>
          <BottomNavigation showLabels>
            <BottomNavigationAction 
              label="My Chats" 
              icon={<RestoreIcon />} />
            <BottomNavigationAction 
              label="Explore" 
              icon={<ExploreIcon />} />
          </BottomNavigation>
        </Drawer>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(App);
