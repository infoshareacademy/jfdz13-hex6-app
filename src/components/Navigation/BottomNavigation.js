import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

// import {NavLink} from "react-router-dom";
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
      <AppBar position="fixed" color="primary" className={classes.appBar}>
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Trip plan" icon={<BeachAccessRoundedIcon />} />
      <BottomNavigationAction label="Favourites" icon={<FavoriteRoundedIcon />} />
      <BottomNavigationAction label="My panel" icon={<AccountCircleRoundedIcon />} />
      {/* <li><NavLink exact to="/" className={styles.BottomNavigationList} > <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} /></NavLink></li> */}
        </BottomNavigation>
      </AppBar>
  );
}


{/* <ul className={styles.menuList}>
<li><NavLink exact to="/"><span aria-label="home" role="img">🏠</span> Home</NavLink></li>
<li><NavLink to="/components/TripList/TripList">Trip List</NavLink></li>
</ul> */}