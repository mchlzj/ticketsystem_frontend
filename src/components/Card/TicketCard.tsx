// import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import {Link} from 'react-router-dom';

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

export default function TicketCard({title, description, ticketClosed, id, createdBy}) {
  const classes = useStyles();

  return (
    <Card>
        <Link className={classes.link} to={`/ticketSuchen/${id}`}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {createdBy}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      {ticketClosed? 
        <Chip className={classes.label} label="Offen" size="small" color="secondary"/> :
        <Chip className={classes.label} label="Geschlossen" size="small" color="primary"/> }
    </Card>
  );
}
