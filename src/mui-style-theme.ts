/*import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

const palette = {
  primary: { main: '#3f51b5' },
  secondary: { main: '#f50057' }
};

const themeName = 'San Marino Razzmatazz Sugar Gliders';

export default createMuiTheme({ palette, themeName });*/

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      marginBottom: theme.spacing(1),
      position: 'sticky',
      top: 90,
      zIndex: 20
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    searchIcon: {
      marginLeft: 10,
    },
    divider: {
      height: 4, 
      margin: 4
    },
  }),
);

export default useStyles