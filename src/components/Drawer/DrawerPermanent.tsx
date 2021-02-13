import React from 'react'
import Drawer from '@material-ui/core/Drawer';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import DrawerContent from './DrawerContent';

function DrawerPermanent({mobileOpen,setMobileOpen}: any) {

    const drawerWidth = 240;

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

const classes = useStyles();

    return (
        <div>
            <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerContent
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}/>
          </Drawer>
        </div>
    );
}

export default DrawerPermanent;
