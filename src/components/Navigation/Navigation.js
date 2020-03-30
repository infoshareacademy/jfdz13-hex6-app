import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import {Link} from "react-router-dom";
import styles from './Navigation.module.css';

import Logo from './Logo.js';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import BottomAppBar from './BottomNavigation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

export default function ButtonAppBar(props) {

  const isMobile = useMediaQuery('(max-width:600px)');
  const isNotMobile = useMediaQuery('(min-width:601px)');
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const [value, setValue] = React.useState(0);
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="main mailbox folders"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels>
      <div className={styles.logoContainer}><Logo/></div> 
      <Divider />
        <ListItem component={Link} to="/" value="home" button>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/components/TripList/TripList" value="trip plan" button>
          <ListItemIcon>
            <BeachAccessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Trip plan" />
        </ListItem>
        <ListItem component={Link} to="/" value="home" button>
          <ListItemIcon>
            <FavoriteRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Favourites" />
        </ListItem>
        <ListItem component={Link} to="/" value="home" button>
          <ListItemIcon>
            <AccountCircleRoundedIcon  />
          </ListItemIcon>
          <ListItemText primary="My pannel" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#02c9da'}} position="fixed">
        <Toolbar>
        {isNotMobile && 
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        }
        <div className={styles.logoContainer}><Logo/></div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>{sideList('left')}</Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
      {isMobile && <BottomAppBar></BottomAppBar>
      }
    </div>
  );
}
