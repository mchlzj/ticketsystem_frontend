import React from 'react'
import Drawer from '@material-ui/core/Drawer';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DrawerContent from './DrawerContent';

function DrawerPermanent(props) {

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
            <DrawerContent history={props.history}/>
          </Drawer>
        </div>
    );
}

export default DrawerPermanent;
