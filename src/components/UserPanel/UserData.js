import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./UserPanel.module.css";
import {
  Paper,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import countries from "./CountryList";
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


  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleOnNicknameChange = (nick) => {
    setNewNick(nick)
  }

  const handleOnCountryChange = (country2) => {
    setNewCountry(country2)
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
        variant="body1"
        style={{ textAlign: "center" }}
      >
        Edit your Quo Vadis information
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          {/* <TextField
            fullWidth
            id="outlined-helperText"
            label="Nickname"
            defaultValue="Ada"
            helperText="Enter your nickname"
            variant="outlined"
          /> */}
          <Nickname onNickNameChange={handleOnNicknameChange}  />
          {/* <TextField
            fullWidth
            id="outlined-helperText"
            label="Email"
            defaultValue="ada@derp.pl"
            helperText="Enter your email"
            variant="outlined"
          /> */}
          {/* <TextField
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
          </TextField> */}
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



// class UserData extends React.Component {
  
//   render() {
//     return (
//       <Paper elevation={1} className={styles.paper}>
//         <Typography
//           variant="body1"
//           style={{ textAlign: "center" }}
//         >
//           Your Quo Vadis account
//         </Typography>
//         <form className={classes.root} noValidate autoComplete="off">
//           <div>
//             <TextField
//               fullWidth
//               id="outlined-helperText"
//               label="Nickname"
//               defaultValue="Ada"
//               helperText="Enter your nickname"
//               variant="outlined"
//             />
//             <TextField
//               fullWidth
//               id="outlined-helperText"
//               label="Email"
//               defaultValue="ada@derp.pl"
//               helperText="Enter your email"
//               variant="outlined"
//             />
//             <TextField
//               fullWidth
//               id="outlined-select-currency-native"
//               select
//               label="Country"
//               value={country}
//               onChange={handleChange}
//               SelectProps={{
//                 native: true,
//               }}
//               helperText="What country do you hail from?"
//               variant="outlined"
//             >
//               {countries.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </TextField>
//           </div>
//         </form>
//         <Container style={{ display: "flex", justifyContent: "space-around" }}>
//           <Button variant="outlined" color="primary">
//             EDIT
//           </Button>
//           <Button variant="outlined" color="primary">
//             SAVE
//           </Button>
//         </Container>
//       </Paper>
//     );
//   };
//   };
  

// export default UserData;
