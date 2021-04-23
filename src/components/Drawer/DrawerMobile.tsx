import React, {useContext} from 'react';
import {MobileOpenContext} from './MobileOpenContext';

import Drawer from '@material-ui/core/Drawer';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import DrawerContent from './DrawerContent';

  const drawerWidth = 240;

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

function DrawerMobile(props) {

    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useContext(MobileOpenContext);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    return (
        <div>
            <Drawer
            className={classes.drawerPaper}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent history={props.history}/>
          </Drawer>
        </div>
    )
}

export default DrawerMobile;
