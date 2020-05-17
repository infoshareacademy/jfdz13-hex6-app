import React from "react";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import countries from "./CountryList";

class Country extends React.Component {
  state = {
    value: "null",
    nickname: "bleh",
    file: null,
    url: "",
    ref: null,
    user: null,
  };

  componentDidMount() {
    this.fetchCountry();
  }

  fetchCountry = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fetch(
          `https://hex6-app.firebaseio.com/country/${
            user.uid
          }/country.json`
        )
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
    this.props.onCountryChange(event.target.value);
    this.setState({ value: event.target.value });
  };



  render() {
    return (
      <TextField
      onChange={this.handleOnChange}
      InputLabelProps={{ shrink: true }}
      fullWidth
      id="outlined-select-currency-native"
      select
      label="Country"
      value={this.state.value}
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
