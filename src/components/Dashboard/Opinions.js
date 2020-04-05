import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export default function Opinions() {

  return (
    <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Adam Scott" src="/Avatars/Avatar-male-photo.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Adam Scott"
          secondary={
            <React.Fragment>
              {"Gdansk - I fall in love with this town and especially with old town. Highly recommend for visiting."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Anna and Mark" src="/Avatars/Avatar-couple-photo.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Anna and Mark"
          secondary={
            <React.Fragment>
              {"Lovely place, you must see the city Sopot from the water side. Great place for walking and very relaxing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Peggy Lui" src="/Avatars/Avatar-girl-photo.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Peggy Lui"
          secondary={
            <React.Fragment>
              {"Really beautiful place, even in the winter (Gdynia)."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
