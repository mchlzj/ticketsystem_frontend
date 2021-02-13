import React from 'react'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

function DrawerContent({mobileOpen, setMobileOpen}: any) {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    link: {
      textDecoration: 'none'
    }
  }),
);

const classes = useStyles();

const handleDrawerToggle = () => {
  if (mobileOpen === true) {
    setMobileOpen(!mobileOpen);
  }
};

  return (
    <div>
      <div className={classes.toolbar} />
          <Divider />
          <List>
            <Link className={classes.link} to="/newticket" onClick={handleDrawerToggle}>
            <ListItem button key='NeuesTicket'>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Neues Ticket' />
              </ListItem>
            </Link>
            <Link className={classes.link} to="/alltickets" onClick={handleDrawerToggle}>
              <ListItem button key='AlleTickets'>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary='Alle Tickets' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
          <Link className={classes.link} to="/statistics" onClick={handleDrawerToggle}>
           <ListItem button key='Statistiken'>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary='Statistiken' />
              </ListItem>
            </Link>
          </List>
    </div>
  )
}

export default DrawerContent
