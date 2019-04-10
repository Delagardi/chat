import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, Toolbar, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, InputBase, Fab, Divider, Paper, Input } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import users from './data/users';
import messages from './data/messages';

const drawerWidth = 320;

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  chatsList: {
    height: 'calc(100% - 60%)',
    overflowY: 'scroll',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  bottomNav: {
    position: 'relative'
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
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CssBaseline>
        <div className={classes.root}>
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
            <BottomNavigation showLabels className={classes.bottomNav}>
              <Fab 
                color="primary" 
                aria-label="Add" 
                className={classes.newChatButton}>
                <AddIcon />
              </Fab>
              <BottomNavigationAction 
                label="My Chats" 
                icon={<RestoreIcon />} />
              <BottomNavigationAction 
                label="Explore" 
                icon={<ExploreIcon />} />
            </BottomNavigation>
          </Drawer>
          <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map( (message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {message.sender[0]}
                </Avatar>
              );

              return (
                <div 
                  key={index} 
                  className={[classes.messageWrapper,
                              isMessageFromMe ? classes.messageWrappperFromMe : ''
                              ].join(' ')}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[
                    classes.message,
                    isMessageFromMe ? classes.messageFromMe : ''
                  ].join(' ')}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              )
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
        </main>
        </div>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(App);
