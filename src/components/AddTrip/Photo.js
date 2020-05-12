import React from "react";
import { Paper, Grid, Avatar} from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';
import styles from "./UserPanel.module.css";

import Gdansk from '../TripList/Gdansk.jpg'
import Sopot from '../TripList/Sopot.jpg'
import Gdynia from '../TripList/Gdynia.jpg'

const Photo = ({city}) => {
 
  return (
    <StylesProvider injectFirst>
      <Paper elevation={1} className={styles.photo_paper}>
        <Grid container className={styles.photo_gridContainer}>

      <>
          { city === "" ? <Avatar alt="Avatar_photo" className={styles.photo_avatar}/> : null }
          { city === "Gdynia" ? <img src={Gdynia} alt="complex"  className={styles.photo_cityAvatar}/> : null }
          { city === "Gdańsk" ? <img src={Gdansk} alt="complex"  className={styles.photo_cityAvatar}/> : null }
          { city === "Sopot" ? <img src={Sopot} alt="complex"  className={styles.photo_cityAvatar}/> : null }
          
      </>      

        </Grid>
      </Paper>
    </StylesProvider>
  );
};

export default Photo;