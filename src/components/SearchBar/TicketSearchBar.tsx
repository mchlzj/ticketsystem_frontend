import {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../mui-style-theme';
import '../../style-theme'


export default function TicketSearchBar() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  // const [closed, setClosed] = useState(false);

  const handleSearch = (e) => {
    setTitle(e.target.value);
    console.log(title);
  }

  return (
    <Paper  component="form" className={classes.root}>

<Grid
  container
  direction="column"
  justify="center"
  alignItems="flex-start"
>
  <div>
        <SearchIcon className={classes.searchIcon}/>

      <InputBase
        className={classes.input}
        placeholder="Titel"
        inputProps={{ 'aria-label': 'Titel' }}
        value={title}
        onChange={handleSearch}
      />
      </div>
      <Divider  />
      <FormControlLabel
          value="true"
          control={<Switch color="secondary" />}
          label="Geschlossen?"
          labelPlacement="end"
        />
    </Grid>
    </Paper>
  );
}
