import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import {Link} from "react-router-dom";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import UserProvider from '../providers/UserProvider'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#02c9da',
      main: '#02c9da',
      dark: '#02c9da',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#02c9da',
      main: '#02c9da',
      dark: '#02c9da',
      contrastText: '#ffffff',
    },
  },
});

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
 
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction component={Link} to="/" value="home" label="Home" icon={<HomeRoundedIcon color="primary" />} />
      
      <UserProvider>
        {user => {return user ? 
          <BottomNavigation showLabels>
            <BottomNavigationAction value="trip plan" label="Trip plan" icon={<BeachAccessRoundedIcon color="primary" onClick={handleMenu} />} />
              <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                  <MenuItem onClick={handleClose} component={Link} to="/components/TripList/TripList">Find a trip</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/components/AddTrip/AddTripPanel">Add new trip</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/components/FavouriteTripListPage/FavouriteTrips">Favourite trips</MenuItem>

              </Menu>
          </BottomNavigation>
      
        : <BottomNavigation showLabels>
            <BottomNavigationAction component={Link} to="/components/TripList/TripList" label="Trip plan" value="trip plan" icon={<BeachAccessRoundedIcon color="primary" />} />
          </BottomNavigation>
        {/* <BottomNavigationAction label="Favourites" icon={<FavoriteRoundedIcon />} /> */}
      }}
      </UserProvider>

      <BottomNavigationAction component={Link} to="/components/UserPanel/UserPanel" label="My panel" icon={<AccountCircleRoundedIcon color="primary" />} />
        </BottomNavigation>
      </AppBar>
      </ThemeProvider>
  );
}

