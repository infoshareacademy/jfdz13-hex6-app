import React from "react";
import { Paper } from "@material-ui/core";
import styles from "./UserPanel.module.css";
import TextField from "@material-ui/core/TextField";


const AddDescription = () => {
  return (
    <Paper elevation={1} className={styles.addDescription_paper}>
      <div className={styles.addDescription_div}>
        <TextField
            fullWidth="true"
            id="outlined-helperText"
            label="Description"
            helperText="Description of your trip"
            variant="outlined"
            multiline="true"
            rows='13'
          />
      </div>
    </Paper>
  );
};

export default AddDescription
