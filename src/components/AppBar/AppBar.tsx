import React, {useContext} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  MenuUser, {UserMenuId} from './MenuUser';

import {MobileOpenContext} from '../Drawer/MobileOpenContext';
import {AnchorElContext} from './AnchorElContext';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  const classes = useStyles();
  // Auskommentiert, da sich der Z-Index des Menüs irgendwie nicht ändern lässt
  const [anchorEl, setAnchorEl] = React.useContext(AnchorElContext);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [mobileOpen, setMobileOpen] = useContext(MobileOpenContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
