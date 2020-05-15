import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./UserPanel.module.css";
import { Paper} from "@material-ui/core";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function AddMainInformation({onChange, details}) {


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
          value={details.name}
      
        />
        <div className={styles.addMainInformation_select}>
          <FormControl fullWidth = "true">
            <InputLabel >Destination</InputLabel>
              <NativeSelect onChange={onChange} name="city" value={details.city}>
                <option value={""}></option>
                <option value={"Gdańsk"}>Gdańsk</option>
                <option value={'Gdynia'}>Gdynia</option>
                <option value={"Sopot"}>Sopot</option>
              </NativeSelect>
            <FormHelperText>Destination of your trip</FormHelperText>
          </FormControl>
        </div>
        <div className={styles.addMainInformation_formControl}>
          <FormControl >
            <FormLabel >Number of people:</FormLabel>
            <RadioGroup value={details.numberOfPeople}  >
              <FormControlLabel value="single" control={<Radio />} label="single" name="numberOfPeople" onChange={onChange}/>
              <FormControlLabel value="couple" control={<Radio />} label="couple" name="numberOfPeople" onChange={onChange}/>
              <FormControlLabel value="family with kids" control={<Radio />} label="family with kids" name="numberOfPeople" onChange={onChange}/>
            </RadioGroup >
          </FormControl>
          <FormControl >
            <FormLabel >Season:</FormLabel>
            <RadioGroup value={details.seasonTime}  >
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
          value={details.tripLength}
          onChange={onChange}
          
        />
        <TextField
          fullWidth = "true"
          id="outlined-helperText"
          label="Price"
          helperText="Price of your trip"
          variant="outlined"
          name="price"
          value={details.price}
          onChange={onChange}
         
        />
      </div>
    </Paper>
  );
}
