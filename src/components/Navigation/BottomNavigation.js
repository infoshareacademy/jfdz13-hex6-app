import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import {Link} from "react-router-dom";
// import styles from './Navigation.module.css';

// import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
 
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction component={Link} to="/" value="home" label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction component={Link} to="/components/TripList/TripList" value="trip plan" label="Trip plan" icon={<BeachAccessRoundedIcon />} />
      <BottomNavigationAction label="Favourites" icon={<FavoriteRoundedIcon />} />
      {/* <BottomNavigationAction label="My panel" icon={<AccountCircleRoundedIcon />} /> */}
      <BottomNavigationAction edge="end" color="inherit" icon={<MoreIcon />} />
        </BottomNavigation>
      </AppBar>
  );
}

