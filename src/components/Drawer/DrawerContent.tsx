import  {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {MobileOpenContext} from './MobileOpenContext';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withStyles} from '@material-ui/core';
import {UserRoleContext} from '../../util/UserCredsContext';
import auth from '../../util/auth'
import CreateIcon from '@material-ui/icons/Create';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import  {isClosedContext} from '../../util/FilterContext'

//Einzelne Komponente für den Inhalt des Drawers, damit dieser beim mobilen und desktop Drawer gleich ist.
function DrawerContent(props) {

// Style definition
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    link: {
      textDecoration: 'none'
    }
  }),
);

// Consts for setting and getting the saved context variables
const [mobileOpen, setMobileOpen] = useContext(MobileOpenContext);
const [userRole, setUserRole] = useContext(UserRoleContext);
const [, setIsClosed] = useContext(isClosedContext);
// Setting the current user role
useEffect(() => {
  setUserRole(auth.getUserRole());
},[])

const classes = useStyles();

const handleDrawerToggle = () => {
  if (mobileOpen === true) {
    setMobileOpen(!mobileOpen);
  }
  console.log(window.location.href);
};

// Logout function
const handleLogout = () => {
  localStorage.removeItem('token');
  props.history.push('/login');
  setUserRole(auth.getUserRole());
  setIsClosed(false);
};

// Styling of different used items
const StyledListItemText = withStyles({
  root: {
    color: "white",
  },
})(ListItemText);

const StyledListItemIcon = withStyles({
  root: {
    color: "white",
  },
})(ListItemIcon);

const StyledListItem = withStyles({
  root: {
    color: "#EA5B0F",
    '&$selected': { 
      backgroundColor: "#EA5B0F", 
    }, 
  },
})(ListItem);

// Returning the drawer content
  return (
    <div>
      <div className={classes.toolbar} />
          <Divider />
          <List>
            <Link className={classes.link} to="/newticket" onClick={handleDrawerToggle}>
            <StyledListItem button key='NeuesTicket'>
                <StyledListItemIcon style={window.location.href==="http://localhost:3000/newticket" ? {color: "#EA5B0F"} : {}}><CreateIcon /></StyledListItemIcon>
                <StyledListItemText primary='Neues Ticket' style={window.location.href==="http://localhost:3000/newticket" ? {color: "#EA5B0F"} : {}}/>
              </StyledListItem>
            </Link>
            <Link className={classes.link} to="/ticketSuchen" onClick={handleDrawerToggle}>
              <StyledListItem button key='ticketSuchen'>
                <StyledListItemIcon style={window.location.href==="http://localhost:3000/ticketSuchen" ? {color: "#EA5B0F"} : {}}><AllInboxIcon /></StyledListItemIcon>
                <StyledListItemText primary='Alle Tickets' style={window.location.href==="http://localhost:3000/ticketSuchen" ? {color: "#EA5B0F"} : {}}/>
              </StyledListItem>
            </Link>
          </List>
          <Divider />
          <List>
          <Link className={classes.link} to="/statistics" onClick={handleDrawerToggle}>
           <StyledListItem button key='Statistiken'>
                <StyledListItemIcon style={window.location.href==="http://localhost:3000/statistics" ? {color: "#EA5B0F"} : {}}><BarChartIcon /></StyledListItemIcon>
                <StyledListItemText primary='Statistiken' style={window.location.href==="http://localhost:3000/statistics" ? {color: "#EA5B0F"} : {}}/>
              </StyledListItem>
            </Link>
            
              <Link className={classes.link} to="/meineTickets" onClick={handleDrawerToggle}>
              <StyledListItem button key='meineTickets'>
                   <StyledListItemIcon style={window.location.href==="http://localhost:3000/meineTickets" ? {color: "#EA5B0F"} : {}}><InboxIcon /></StyledListItemIcon>
                   <StyledListItemText primary='Meine Tickets' style={window.location.href==="http://localhost:3000/meineTickets" ? {color: "#EA5B0F"} : {}} />
                 </StyledListItem>
               </Link>
               {userRole === 'Tutor' ?
            <Link className={classes.link} to="/MirZugewieseneTickets" onClick={handleDrawerToggle}>
            <StyledListItem button key='MirZugewieseneTickets'>
                 <StyledListItemIcon style={window.location.href==="http://localhost:3000/MirZugewieseneTickets" ? {color: "#EA5B0F"} : {}}><AssignmentIndIcon /></StyledListItemIcon>
                 <StyledListItemText primary='Mir zugewiesene Tickets' style={window.location.href==="http://localhost:3000/MirZugewieseneTickets" ? {color: "#EA5B0F"} : {}}/>
               </StyledListItem>
             </Link>
             :
             null
          }
            <StyledListItem button key='meineTickets' onClick={handleLogout}>
            <StyledListItemIcon ><MeetingRoomIcon /></StyledListItemIcon>
            <StyledListItemText primary='Logout'  />
          </StyledListItem>
          </List>
    </div>
  )
}

export default DrawerContent
