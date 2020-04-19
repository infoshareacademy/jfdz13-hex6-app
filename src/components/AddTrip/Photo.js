import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';
import styles from "./UserPanel.module.css";

const Photo = () => {
  return (
    <StylesProvider injectFirst>
      <Paper elevation={1} className={styles.photo_paper}>
        <Grid container className={styles.photo_gridContainer}>
          <Avatar alt="Avatar_photo" className={styles.photo_avatar}/>
          <Typography className={styles.photo_text}>
            Add photo
          </Typography>
        </Grid>
      </Paper>
    </StylesProvider>
  );
};

export default Photo;