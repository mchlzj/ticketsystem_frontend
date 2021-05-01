import React, {useContext, useState} from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  {UserMenuId} from './MenuUser';
import InputBase from '@material-ui/core/InputBase';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchIcon from '@material-ui/icons/Search';
import {MobileOpenContext} from '../Drawer/MobileOpenContext';
import {AnchorElContext} from './AnchorElContext';
import { useHistory } from 'react-router-dom';
import { TicketsContext } from '../../pages/AllTickets/TicketsContext';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          flexGrow: 1,
          align: 'center'
        },
      },
      sectionDesktop: {
        display: 'flex',
      },
      grow: {
        flexGrow: 1,
      },
    appBar: {
      zIndex: theme.zIndex.drawer + 101,
      // [theme.breakpoints.up('md')]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
      // },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);


function StyledAppBar() {
  const history = useHistory();
  const classes = useStyles();
  // Auskommentiert, da sich der Z-Index des Menüs irgendwie nicht ändern lässt
  const [, setAnchorEl] = React.useContext(AnchorElContext);
  const [tickets, setTickets] = useContext(TicketsContext);
  const [title, setTitle] = useState('');

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [mobileOpen, setMobileOpen] = useContext(MobileOpenContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e) => {
    setTitle(e.target.value);
  }

  const goToSearch = () => {
    history.push('/ticketSuchen');
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Easy-Ticket
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <div className={classes.search}>
            <IconButton color="primary" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Ticket suchen..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              onClick={goToSearch}
            />
          </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={UserMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Irgendwie lässt sich der Z-Index des Menüs nicht ändern. Deshalb erstmal auskommentiert. */}
      {/* <MenuUser/> */}
    </div>
  );
}

export default StyledAppBar;
