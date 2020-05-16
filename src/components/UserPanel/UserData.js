import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./UserPanel.module.css";
import {
  Paper,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import firebase from "firebase";
import Nickname from "./Nickname";
import Country from "./Country";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));



export default function UserData() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const [newNick, setNewNick] = React.useState("");
  const [newCountry, setNewCountry] = React.useState("");


  const handleOnNicknameChange = (nick) => {
    setNewNick(nick)
  }

  const handleOnCountryChange = (country) => {
    setNewCountry(country)
  }

  const handleOnClick = () => {
    fetch(
      `https://hex6-app.firebaseio.com/nick/${firebase.auth().currentUser.uid}/nick.json`, {method: "PUT", body: JSON.stringify(newNick) })
      .then((resp) => resp.json())

      fetch(
        `https://hex6-app.firebaseio.com/country/${firebase.auth().currentUser.uid}/country.json`, {method: "PUT", body: JSON.stringify(newCountry) })
        .then((resp) => resp.json())
  }

  return (
    <Paper elevation={1} className={styles.paper}>
      <Typography
        variant="h5"
        style={{ textAlign: "center" }}
      >
        Edit your Quo Vadis information
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Nickname onNickNameChange={handleOnNicknameChange}  />
          <Country onCountryChange={handleOnCountryChange} />
        </div>
      </form>
      <Container style={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={handleOnClick} variant="outlined" color="primary">
          CONFIRM UPDATE
        </Button>
      </Container>
    </Paper>
  );
}