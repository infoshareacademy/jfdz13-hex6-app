import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const Photo = () => {
  return (
    <Paper elevation={1} className={styles.photo_paper}>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={styles.avatarContainer}>
          <Avatar
            alt=""
            className={styles.avatar}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <Typography
          variant="body1"
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          Add photo
        </Typography>
      </Grid>
    </Paper>
  );
};

export default Photo;