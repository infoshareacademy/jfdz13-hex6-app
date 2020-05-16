import React from "react";
import { Grid } from "@material-ui/core";
import ProfilePanel from "./ProfilePanel";
import UserData from "./UserData";
import styles from "./UserPanel.module.css";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Typography, Container } from "@material-ui/core";



class Country extends React.Component {
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

  fetchCountry = () => {
    fetch(
      `https://hex6-app.firebaseio.com/nick/vGjFLrnW1FfMsBJPALtZe4KwNWB3/nick.json`
    )
      .then((resp) => resp.json())
      .then((value) => {
        this.setState({
          value,
        });
      });
  };

  render() {
    return (
      <TextField
      fullWidth
      id="outlined-select-currency-native"
      select
      label="Country"
      value={country}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      helperText="What country do you hail from?"
      variant="outlined"
    >
      {countries.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
);
  }
}

export default Country;
