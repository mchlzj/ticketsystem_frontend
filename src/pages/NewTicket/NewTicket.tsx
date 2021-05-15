import {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {createNewTicket} from '../../util/ApiCalls';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import {getModules, getDocuments} from '../../util/ApiCalls';
import { useHistory } from 'react-router-dom';

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
      textTransform: 'none',
      marginTop: 20,
    },
    selected: {
      backgroundColor: "grey !important",
      color: "white",
      fontWeight: 600
    }
  }),
);

export default function NewTicket({moduls, setModules, documents, setDocuments}) {
    const classes = useStyles();
    const history = useHistory();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [modul, setModuleValue] = useState('');
    const [document, setDocumentValue] = useState('');

    useEffect(() => {
      getModules()
      .then(data => {
        setModules(data);
      })
      .then(() => console.log(moduls)); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      getDocuments(modul)
      .then(data => {
        setDocuments(data);
      })
      .then(() => console.log(documents)); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleModuleChange = ({target}) => {
      getDocuments(target.value)
      .then(data => {
        setDocuments(data);
      })
      setModuleValue(target.value);
    };

    const handleDocumentChange = ({target}) => {
      setDocumentValue(target.value);
    };

    const handleChangeDescription = ({target}) => {
        setDescriptionValue(target.value);
    };
    const handleChangeTitle = ({target}) => {
        setTitleValue(target.value);
    };

    const submitTicket = () => {
        if (titleValue!=="" && descriptionValue!=="" && document!=="") {
        createNewTicket( titleValue , descriptionValue, document)
          .then(success => {
            alert('Neues Ticket erfolgreich erstellt!');
            history.push('/ticketSuchen');
          });
        } else {
          alert('Bitte alle Felder ausfüllen!');
        }
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
                      {
                      moduls?.map((item) => {
                        return (
                          <MenuItem key={item.id} value={item.id} selected classes={{ selected: classes.selected }}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                      </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="select-document-label">&nbsp; Format auswählen...</InputLabel>
                      <Select labelId="select-document-label" id="select-document" variant="outlined" value={document} onChange={handleDocumentChange}>
                      {
                      documents?.map((item) => {
                        return (
                          <MenuItem key={item.id} value={item.id} selected classes={{ selected: classes.selected }}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Fab variant="extended" size="medium" color="secondary" className={classes.fab} onClick={submitTicket}>
          &nbsp; Fertig &nbsp; 
          <CheckCircleIcon />
        </Fab>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </form>

      </div>
    );
}


