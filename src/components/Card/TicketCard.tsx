import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

// Style definition
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    link: {
        textDecoration: 'none',
    }
  }),
);



export default function TicketCard({title, description, ticketClosed, id, createdBy, 
                                    modul, document
                                   }) {
  const classes = useStyles();

// Returning the Ticket-Card-Component
  return (
    <Card variant='outlined' style={{ borderRadius: 15, borderWidth: 2, borderColor: 'black' }}>
      <Link className={classes.link} to={`/ticketSuchen/${id}`}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Titel
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body1" component="h2" color="secondary">
                <Box fontWeight="fontWeightBold" fontSize={18}>
                {title}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Modul
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                {modul}
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Format
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                {document}
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Status
              </Box>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body1" component="h2" color="primary">
              <Box fontWeight="fontWeightBold" fontSize={18}>
                {ticketClosed ? "✓" : "⨯"}
              </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
