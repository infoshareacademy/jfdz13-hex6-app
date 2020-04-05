import React from "react";
import styles from "./UserPanel.module.css";
import { Paper} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function AddDetails() {
  const classes = useStyles();


  return (
    <Paper elevation={1} className={styles.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
            <div className={styles.addDetails_div}>
            <Typography id="discrete-slider" gutterBottom>
              Sport
            </Typography>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={5}
            />
            <Typography id="discrete-slider" gutterBottom>
            Monuments
            </Typography>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={5}
            /><Typography id="discrete-slider" gutterBottom>
            Party
          </Typography>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          /><Typography id="discrete-slider" gutterBottom>
          Hotels
        </Typography>
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
        /><Typography id="discrete-slider" gutterBottom>
        Restaurants
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
      />
      </div>
        </div>
      </form>
    </Paper>
  );
}