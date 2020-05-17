import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";

import UserProvider from "../providers/UserProvider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://hex6.jfdz13.is-academy.pl/">
        Quo Vadis
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const classes = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class Remider extends React.Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        redirect: false
      };
    
      handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleOnSubmit = event => {
        event.preventDefault();
    
        if (this.props.isSignUp) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
              this.setState({
                redirect: true
              });
            })
            .catch(function(error) {
              const errorMessage = error.message;
              alert(errorMessage);
            });
        } else {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
              this.setState({
                redirect: true
              });
            })
            .catch(function(error) {
              const errorMessage = error.message;
              alert(errorMessage);
            });
        }
      };
  
  render() {
    return (
      <UserProvider>
        {user => {
          return user ? (
            <h2 style={{ textAlign: "center", marginTop: 100 }}>
              You are already logged in!
            </h2>
          ) : (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <img
                  style={{ height: "auto", width: "50%", marginBottom: "50px", marginTop: "100px" }}
                  alt=""
                  src="/Graphics/login.svg"
                ></img>
                <Typography component="h1" variant="h5">
                  Forgot password?
                </Typography>

                <form
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="enter your email adres"
                    autoFocus
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                  send email
                  </Button>

                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          );
        }}
      </UserProvider>
    );
  }
}

export default Remider;
