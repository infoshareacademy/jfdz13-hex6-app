import React from "react";
import styles from "./UserPanel.module.css";

import { Paper} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function AddDetails({onChange}) {

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
            name="sport"
            onChange={onChange}
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
            name="monuments"
            onChange={onChange}
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
            name="party"
            onChange={onChange}
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
            name="hotels"
            onChange={onChange}
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
            name="restaurants"
            onChange={onChange}
          />
        </div>
      </div>
    </Paper>
  );
}