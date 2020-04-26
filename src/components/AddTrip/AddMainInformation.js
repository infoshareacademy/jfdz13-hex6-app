import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./UserPanel.module.css";
import { Paper} from "@material-ui/core";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AddMainInformation({onChange}) {

  return (
    <Paper elevation={1} className={styles.addMainInformation_paper}>
      <div className={styles.addMainInformation_div}>
        <TextField
          fullWidth = "true"
          id="outlined-helperText"
          label="Title"
          helperText="Title of your trip"
          variant="outlined"
          name="name"
          onChange={onChange}
        />
        <TextField
          fullWidth = "true"
          id="outlined-helperText"
          label="Destiny"
          helperText="Destiny of your trip"
          variant="outlined"
          name="city"
          onChange={onChange}
        />
        <div className={styles.addMainInformation_formControl}>
          <FormControl >
            <FormLabel >Number of people:</FormLabel>
            <RadioGroup >
              <FormControlLabel value="single" control={<Radio />} label="single" name="numberOfPeople" onChange={onChange}/>
              <FormControlLabel value="couple" control={<Radio />} label="couple" name="numberOfPeople" onChange={onChange}/>
              <FormControlLabel value="family with kids" control={<Radio />} label="family with kids" name="numberOfPeople" onChange={onChange}/>
            </RadioGroup >
          </FormControl>
          <FormControl >
            <FormLabel >Season:</FormLabel>
            <RadioGroup>
              <FormControlLabel value="summer" control={<Radio />} label="summer" name="seasonTime" onChange={onChange}/>
              <FormControlLabel value="winter" control={<Radio />} label="winter" name="seasonTime" onChange={onChange}/>
            </RadioGroup>
          </FormControl>
        </div>
        <TextField
          fullWidth = "true"
          id="outlined-helperText"
          label="Trip length"
          helperText="Length of your trip"
          variant="outlined"
          name="tripLength"
          onChange={onChange}
        />
        <TextField
          fullWidth = "true"
          id="outlined-helperText"
          label="Price"
          helperText="Price of your trip"
          variant="outlined"
          name="price"
          onChange={onChange}
        />
      </div>
    </Paper>
  );
}
