import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const FavoriteTripList = () => {
  return (
    <Paper elevation={2} className={styles.paper}>
      <Grid container>
        <Grid item>
          <Typography variant="body1" style={{margin: "15px 0"}}>
            Your favorite trip:
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FavoriteTripList
