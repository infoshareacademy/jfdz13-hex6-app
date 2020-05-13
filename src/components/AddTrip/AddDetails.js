import React from "react";
import styles from "./UserPanel.module.css";

import { Paper} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const AddDetails = ({onChange, details}) => {
  const sliderNames = ['Sport', 'Monuments', 'Party', 'Hotels', 'Restaurants'];

  return (
    <Paper elevation={1} className={styles.addDetails_paper}>
      <div>
        <div className={styles.addDetails_div}>
          {sliderNames.map(slider => {
            console.log(slider.toLowerCase())
            return (
                <>
                  <Typography >
                    {slider}
                  </Typography>
                  <Slider
                      defaultValue={0}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      value={details[slider.toLowerCase()]}
                      name={slider.toLowerCase()}
                      onChange={onChange(slider.toLowerCase())}
                  />
                </>
            )
          })}
        </div>
      </div>
    </Paper>
  );
};
export default AddDetails;