import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import {Link} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#34d3e1',
      main: '#02c9da',
      dark: '#005662',
      contrastText: '#fddb27',
    },
    secondary: {
      light: '#fff59d',
      main: '#fddb27',
      dark: '#fbc02d',
      contrastText: '#005662',
    },
  },
});

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
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" value="home" label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction component={Link} to="/components/TripList/TripList" value="trip plan" label="Trip plan" icon={<BeachAccessRoundedIcon />} />
      {/* <BottomNavigationAction label="Favourites" icon={<FavoriteRoundedIcon />} /> */}
      <BottomNavigationAction label="My panel" icon={<AccountCircleRoundedIcon />} />
        </BottomNavigation>
      </AppBar>
      </ThemeProvider>
  );
}

