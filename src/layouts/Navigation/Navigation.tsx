import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Hidden from '@material-ui/core/Hidden';

import {AnchorElProvider} from '../../components/AppBar/AnchorElContext';

import DrawerPermanent from '../../components/Drawer/DrawerPermanent';
import DrawerMobile from '../../components/Drawer/DrawerMobile';
import AppBar from '../../components/AppBar/AppBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import '../../style-theme'
import { theme } from '../../style-theme';

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


export default function Navigation() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <AnchorElProvider>
        <AppBar/>
      </AnchorElProvider>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp >
          <DrawerMobile/>
        </Hidden>
        <Hidden smDown >
          <DrawerPermanent />
        </Hidden>
      </nav>
    </div>
    </ThemeProvider>
  );
}