import React from "react";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
class Nickname extends React.Component {
  state = {
    value: null,
    nickname: "bleh",
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
