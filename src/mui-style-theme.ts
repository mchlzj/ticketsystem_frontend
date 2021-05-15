import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Style definition
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