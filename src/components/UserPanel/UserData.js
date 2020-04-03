import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./UserPanel.module.css";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function UserData() {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={styles.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Name"
            defaultValue="Ada"
            helperText="Enter your name"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Email"
            defaultValue="ada@derp.pl"
            helperText="Enter your email"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-helperText"
            label="Street and #"
            defaultValue="Termosowa 11"
            helperText="Where do you live?"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-helperText"
            label="Country"
            defaultValue="Poland"
            helperText="What country do you hail from?"
            variant="outlined"
          />
        </div>
      </form>
    </Paper>
  );
}
