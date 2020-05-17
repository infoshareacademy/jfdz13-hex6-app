import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import { Redirect } from "react-router";
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

class Login extends React.Component {
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
        .then((resp) => {
          this.setState({
            redirect: true
          });
          fetch(`https://hex6-app.firebaseio.com/nick/${resp.user.uid}.json`, { method: "PUT", body: JSON.stringify({nick:this.state.email}) }) ;
          fetch(`https://hex6-app.firebaseio.com/country/${resp.user.uid}.json`, { method: "PUT", body: JSON.stringify({country:"Poland"}) }) ;

        })
        .catch(function(error) {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((resp) => {
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
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
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
                  style={{ height: "auto", width: "50%", marginBottom: "50px" }}
                  alt=""
                  src="/Graphics/login.svg"
                ></img>
                <Typography component="h1" variant="h5">
                  {this.props.isSignUp ? "Register" : "Login"}
                </Typography>

                <form
                  className={classes.form}
                  noValidate
                  onSubmit={this.handleOnSubmit}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoFocus
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="current-password"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {this.props.isSignUp ? "Register" : "Login"}
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                    {this.props.isSignUp
                    ? <Link href="/sign-in">Do you have an account? Sign In</Link>
                    : <Link href="/sign-up">Don't have an account? Sign Up</Link>
                    }
                    </Grid>
                  </Grid>
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

export default Login;
