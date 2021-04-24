import { createMuiTheme } from '@material-ui/core/styles';

/*declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

const palette = {
  primary: { main: '#f5b000' },
  secondary: { main: '#10b51e' }
};

const themeName = 'San Marino Razzmatazz Sugar Gliders';*/

export const theme = createMuiTheme({
    palette: {
        primary: { main: '#113440' },
        secondary: { main: '#EA5B0F' },
        text: {
            primary: '#113440',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                color: 'white'
            }
        },
        MuiDrawer: {
            root: {
                backgroundColor: '#113440',
            }
        },
        MuiListItem: {
            root: {
              "&$selected": {
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "orange",
                },
              },
            },
        }
    },
    props: {
        MuiDrawer: {
            color: '#113440'
        }
    }
}); 