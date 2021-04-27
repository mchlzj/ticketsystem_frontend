import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {sendData} from './ApiCalls';
import auth, {getUserRole} from '../../util/auth'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    title: {
        width: '50ch'
    },
    description: {
        width: '150ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      textTransform: 'none'
    }
  }),
);

export default function NewTicket() {
    const classes = useStyles();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [modul, setModuleValue] = useState('');

    useEffect(() => {
      console.log(auth.getUserRole());
    })

    const handleModuleChange = ({target}) => {
      setModuleValue(target.value);
  };

    const handleChangeDescription = ({target}) => {
        setDescriptionValue(target.value);
    };
    const handleChangeTitle = ({target}) => {
        setTitleValue(target.value);
    };
    const submitTicket = () => {
        console.log("i got clicked");
        sendData(titleValue,descriptionValue).then(success => alert('Neues Ticket erfolgreich erstellt!'));

    };

    
    return (
      <div>

        <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Grid item>
            <CreateIcon fontSize='large'/>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
            &nbsp; Neues Ticket erstellen
            </Typography>
          </Grid>
        </Grid>

        <form className={classes.root} noValidate autoComplete="off">
        <Grid container justify="flex-start" alignItems="flex-start" spacing={1}>
          <Grid item xs={"auto"}>
            <Card variant='outlined' style={{ borderRadius: 15, borderWidth: 2, borderColor: 'black'}}>
              <CardContent>
                <Grid container justify="space-around" alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Titel
                    </Box>
                    </Typography>
                    <TextField id="title_textfield" fullWidth={true} label="Titel eingeben..." variant="outlined" value={titleValue} onChange={handleChangeTitle}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Beschreibung
                    </Box>
                    </Typography>
                    <TextField id="description_textfield" fullWidth={true} value={descriptionValue} onChange={handleChangeDescription} multiline={true} label="Beschreibung eingeben..." variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Modul
                    </Box>
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="select-module-label">&nbsp; Modul auswählen...</InputLabel>
                      <Select labelId="select-module-label" id="select-module" variant="outlined" value={modul} onChange={handleModuleChange}>
                        <MenuItem value={'DLBRIV'}>DLBRIV</MenuItem>
                        <MenuItem value={'BSTA'}>BSTA</MenuItem>#
                        <MenuItem value={'IGIS'}>IGIS</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </form>

        <Fab variant="extended" size="medium" color="secondary" className={classes.fab} onClick={submitTicket}>
          &nbsp; Fertig &nbsp; 
          <CheckCircleIcon />
        </Fab>

      </div>
    );
}


