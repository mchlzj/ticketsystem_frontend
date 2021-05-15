import { createMuiTheme } from '@material-ui/core/styles';

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