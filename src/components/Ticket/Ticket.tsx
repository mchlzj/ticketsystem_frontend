import  {useState,useEffect, useContext} from 'react'
import {CommentsContext} from '../Comments/CommentContext';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {getTicketById, changeTicketStatus} from '../../util/ApiCalls';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';
import classes from '*.module.css';
import { AutoSizer } from '@material-ui/data-grid';
import Comments from '../Comments/Comments';
import NewComment from '../Comments/NewComment';
import {TicketContext} from './TicketContext';
import CreateIcon from '@material-ui/icons/Create';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import auth from '../../util/auth'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
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


function Ticket({match}) {
  const classes = useStyles();

    const [ticket, setTicket] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useContext(CommentsContext);
    const [status, setStatusValue] = useState<any>();

    var statusIsChanged=false;

    useEffect(() => {
        getTicketById(match.params.id)
        .then(data => {
          setTicket(data);
          setStatusValue(data.ticketClosed);
          console.log(data.ticketClosed);
        })
        .then(() => {
          setIsLoading(false);
        })
        console.log('Called Ticket with Id ' + match.params.id);
    },[comments, match.params.id])

    useEffect(() => {
      console.log(auth.getUserRole());
    })

    const handleStatusSwitch = (event) => {
      setStatusValue(event.target.checked);
      console.log("A!!!!!!")
      console.log(event.target.checked)
      changeTicketStatus(ticket.id);
    };


    return (
      <div>


{/*
<Card >
            <CardContent>
            {isLoading ? 
            <h1>Loading...</h1> : 
            <div>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
                &nbsp; {ticket.title}
                </Typography>
              <Typography variant="h5">
                Titel
              </Typography>
              <Typography>
              {ticket.title}
              </Typography>
              <Typography variant="h5">
                Beschreibung
              </Typography>
              <Typography>
              {ticket.description}
              </Typography>
              <Typography variant="h5">
                Status
              </Typography>
              {ticket.closed? 
              <Chip label="geschlossen" color="secondary"/>:
              <Chip label="offen" color="primary"/>
            }
            <Typography variant="h5">
                Erstelldatum
              </Typography>
              <Typography>
              {ticket.createdDate}
              </Typography>
              <Typography variant="h5">
                Änderungsdatum
              </Typography>
              
              <Typography>
              {ticket.lastChangedDate}
              </Typography>
              <Divider variant="middle"/>
              <NewComment ticketID={ticket.id}/>
              <Comments comments={ticket.comments}/>
            </div>
                   
            }
            </CardContent>
            </Card>
          */}

{isLoading ? 
            <h1>Loading...</h1> : 
            <div>
<Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Grid item>
            <CreateIcon fontSize='large'/>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
            &nbsp; Ticketübersicht
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
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontSize={18}>
                      {ticket.title}
                    </Box>
                    </Typography>                  
                    </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Beschreibung
                    </Box>
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontSize={18}>
                      {ticket.description}
                    </Box>
                    </Typography>                    
                    </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Modul
                    </Box>
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontSize={18}>
                      {ticket.document.module.name}
                    </Box>
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Format
                    </Box>
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontSize={18}>
                      {ticket.document.name}
                    </Box>
                    </Typography>  
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontWeight="fontWeightBold" fontSize={18}>
                      Status
                    </Box>
                    </Typography>
                    {
                      ticket.document.module.responsible.userName===auth.getUserName() ?
                      <FormGroup>
                        <FormControlLabel label={status ? "Geschlossen" : "Offen"} control={<Switch
                      checked={status}
                      onChange={handleStatusSwitch}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />}/>
                      </FormGroup> :
                    <Typography gutterBottom variant="body1" component="h2" color="primary">
                    <Box fontSize={18}>
                      {ticket.ticketClosed ? "Geschlossen" : "Offen"}
                    </Box>
                    </Typography>
                    }
                    </Grid>
                </Grid>
                              <Divider variant="middle"/>
              <NewComment ticketID={ticket.id}/>
              <Comments comments={ticket.comments}/>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </form>
        <Typography gutterBottom variant="body1" component="h2" color="primary">
        <Box fontSize={18}>
        Das Ticket wurde am {ticket.createdDate.split('T')[0].split('-')[2]}.{ticket.createdDate.split('T')[0].split('-')[1]}.{ticket.createdDate.split('T')[0].split('-')[0]} erstellt und zuletzt am {ticket.lastChangedDate.split('T')[0].split('-')[2]}.{ticket.lastChangedDate.split('T')[0].split('-')[1]}.{ticket.lastChangedDate.split('T')[0].split('-')[0]} um {ticket.lastChangedDate.split('T')[1].split(':')[0]}:{ticket.lastChangedDate.split('T')[1].split(':')[1]} Uhr geändert.
        </Box>
        </Typography>
</div>}
            </div>


    )
}

export default Ticket


