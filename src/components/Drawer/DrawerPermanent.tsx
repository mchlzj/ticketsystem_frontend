import Drawer from '@material-ui/core/Drawer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DrawerContent from './DrawerContent';
import { ThemeProvider } from '@material-ui/core/styles';
import '../../style-theme'
import { theme } from '../../style-theme';

//Wird in einer Desktop Umgebung dargestellt.
function DrawerPermanent(props) {

    const drawerWidth = 240;

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
      background: "#113440",
    },
  }),
);

const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
}

export default DrawerPermanent;
