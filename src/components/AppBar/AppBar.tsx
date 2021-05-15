import React, {useContext, useState, useEffect} from 'react';
import {MobileOpenContext} from '../Drawer/MobileOpenContext';
import {AnchorElContext} from './AnchorElContext';
import { useHistory } from 'react-router-dom';
import { TicketsContext } from '../../pages/AllTickets/TicketsContext';
import {getTicketsByTitle, getAllTickets} from '../../util/ApiCalls';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import  {UserMenuId} from './MenuUser';
import InputBase from '@material-ui/core/InputBase';;


// Define styling
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      justifySelf: 'center'
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          flexGrow: 1,
          align: 'center'
        },
      },
      sectionDesktop: {
        display: 'flex',
      },
      grow: {
        flexGrow: 1,
      },
    appBar: {
      zIndex: theme.zIndex.drawer + 101,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

  }),
);


function StyledAppBar() {

  // Necessary consts
  const history = useHistory();
  const classes = useStyles();
  const [, setAnchorEl] = React.useContext(AnchorElContext);
  const [, setTickets] = useContext(TicketsContext);
  const [title, setTitle] = useState('');

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [mobileOpen, setMobileOpen] = useContext(MobileOpenContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e) => {
    setTitle(e.target.value);
  }
  useEffect(() => {
    title === '' ?
    getAllTickets()
      .then(data => {
        setTickets(data);
      })
      :
    getTicketsByTitle(title)
    .then(data => {
      setTickets(data);
    })
  }, [title])

  const goToSearch = () => {
    history.push('/ticketSuchen');
  }

  // Return AppBar
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Easy-Ticket
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <div className={classes.search}>
            <InputBase
              placeholder="Ticket suchen..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              onClick={goToSearch}
            />
          </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={UserMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src="/media/IconIU.jpg" alt="IU - Logo" height="30"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default StyledAppBar;
