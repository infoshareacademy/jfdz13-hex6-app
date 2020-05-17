import React from "react";
import placeholder from "./avatar-1.svg";
import firebase from "firebase";
import { Button, Container, IconButton, Avatar } from "@material-ui/core";
import styles from "./UserPanel.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

class AvatarChange extends React.Component {
  state = {
    file: null,
    url: "",
    ref: null,
    user: null,
  };

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      this.fetchAvatarUrl();
    });

    this.setState({ ref });
  }

  componentWillUnmount() {
    this.state.ref();
  }

  handleOnChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleOnClick = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .put(this.state.file)
      .then(() => {
        this.fetchAvatarUrl();
      });
  };

  fetchAvatarUrl = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .getDownloadURL()
      .then((url) => {
        this.setState({
          url,
        });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      this.state.user && 
        <Container >
            <Container style={{ display: "flex", justifyContent: "space-around" }}>
            <Avatar
              style={{ width: "5em", height: "5em", marginBottom: "1em" }}
              className={classes.large}
              alt="User Avatar"
              src={this.state.url || placeholder}
            />
            </Container>
            <Button variant="contained" component="label">
              1. Upload File
              <input
                type="file"
                accept="image/*"
                onChange={this.handleOnChange}
                style={{ display: "none" }}
              />
            </Button>

            <Button
              onClick={this.handleOnClick}
              variant="contained"
              color="primary"
            >
              2. Add avatar
            </Button>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{ display: "none" }}
            />

        </Container>
      
    );
  }
}

export default withStyles(useStyles)(AvatarChange);

// export default AvatarChange;
// className={styles.avatarContainer}
