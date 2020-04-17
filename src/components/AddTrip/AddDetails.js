import React from "react";
import styles from "./UserPanel.module.css";

import { Paper} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function AddDetails() {

  return (
    <Paper elevation={1} className={styles.addDetails_paper}>
      <div>
        <div className={styles.addDetails_div}>
          <Typography >
            Sport
          </Typography>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
          <Typography  >
            Monuments
          </Typography>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
          <Typography >
            Party
          </Typography>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
          <Typography >
            Hotels
          </Typography>
          <Slider
            defaultValue={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
          <Typography>
            Restaurants
          </Typography>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
        </div>
      </div>
    </Paper>
  );
}