import React from "react";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import UserProvider from '../providers/UserProvider'


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
  
  
  
  class AppAvatar extends React.Component {
    
  
    render () {
  
      return ( <UserProvider>
          {(user) => {
          return (
      <div style={{ marginRight: '15px'}}>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
          
          
        >
          <Avatar style={{ height: '50px', width:'50px', marginLeft: '5px'}} alt="Ada" src="/Avatars/avatar-1.svg" />
        </StyledBadge>
      </div>
   )}}
   </UserProvider>
   )}};

   export default AppAvatar;