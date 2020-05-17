import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


class Opinions extends React.Component {
  render() {

  return (

    <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={this.props.testimonialsListData.name} src={this.props.testimonialsListData.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={this.props.testimonialsListData.name}
          secondary={
            <React.Fragment>
              {this.props.testimonialsListData.opinion}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    );
  }
}

export default Opinions;