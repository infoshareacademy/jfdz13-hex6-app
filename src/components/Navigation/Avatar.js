import React, { useState, useEffect } from "react";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import UserProvider from "../providers/UserProvider";
import firebase from "firebase";

  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function AppAvatar({user}) {
    const classes = useStyles();

  const [avatarUrl, setAvatar] = useState('')

  useEffect(() => {
      firebase.storage().ref(`avatars/${user.uid}`).getDownloadURL()
          .then(url => setAvatar(url))
  });

    return (
      <UserProvider>
        {user => {
          return <div className={classes.root} style={{ marginRight: '15px'}}>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar style={{ height: '50px', width:'50px', marginLeft: '5px'}} alt="Ada"  src = {avatarUrl} />
          </StyledBadge>
        </div>
        }}
      </UserProvider>
    );
  }