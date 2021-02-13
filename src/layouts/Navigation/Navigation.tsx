import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Hidden from '@material-ui/core/Hidden';

import DrawerPermanent from '../../components/Drawer/DrawerPermanent';
import DrawerMobile from '../../components/Drawer/DrawerMobile';
import AppBar from '../../components/AppBar/AppBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

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
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);


export default function ResponsiveDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <CssBaseline />
      <AppBar 
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp >
          <DrawerMobile
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}/>
        </Hidden>
        <Hidden smDown >
          <DrawerPermanent />
        </Hidden>
      </nav>
    </div>
  );
}