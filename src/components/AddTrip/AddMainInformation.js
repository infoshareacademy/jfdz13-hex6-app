import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./UserPanel.module.css";
import { Paper} from "@material-ui/core";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddMainInformation() {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper elevation={1} className={styles.addMainInformation_paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={styles.addMainInformation_div}>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Title"
            helperText="Title of your trip"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Destiny"
            helperText="Destiny of your trip"
            variant="outlined"
          />
          <div className={styles.addMainInformation_formControl}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Number of people:</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="single" control={<Radio />} label="single" />
                <FormControlLabel value="couple" control={<Radio />} label="couple" />
                <FormControlLabel value="family with kids" control={<Radio />} label="family with kids" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Season:</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="summer" control={<Radio />} label="summer" />
                <FormControlLabel value="winter" control={<Radio />} label="winter" />
              </RadioGroup>
            </FormControl>
          </div>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Trip length"
            helperText="Length of your trip"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Price"
            helperText="Price of your trip"
            variant="outlined"
          />
        </div>
      </form>
    </Paper>
  );
}
