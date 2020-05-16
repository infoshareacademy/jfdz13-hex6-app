import React from "react";
import { Grid } from "@material-ui/core";
import ProfilePanel from "./ProfilePanel";
import UserData from "./UserData";
import styles from "./UserPanel.module.css";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Typography, Container } from "@material-ui/core";

class Nickname extends React.Component {
  state = {
    value: null,
    nickname: "bleh",
    // nickname: fetch(`https://hex6-app.firebaseio.com/nick/vGjFLrnW1FfMsBJPALtZe4KwNW.json`, { method: "GET", body: JSON.stringify({nick:this.state.email}) }),
    file: null,
    url: "",
    ref: null,
    user: null,
  };

  componentDidMount() {
    this.fetchNickname();
    console.log(this.state.value);
  }

  fetchNickname = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fetch(`https://hex6-app.firebaseio.com/nick/${user.uid}/nick.json`)
          .then((resp) => resp.json())
          .then((value) => {
            this.setState({
              value,
            });
                console.log(this.state.value);
          });
      }
    });
  };

  handleOnChange = (event) => {
    this.props.onNickNameChange(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <TextField
        InputLabelProps={{ shrink: true }}
        onChange={this.handleOnChange}
        fullWidth
        id="outlined-helperText"
        label="Nickname"
        value={this.state.value}
        helperText="This is your current nickname"
        variant="outlined"
      />
    );
  }
}

export default Nickname;
