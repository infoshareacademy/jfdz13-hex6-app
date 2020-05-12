import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';
import styles from "./UserPanel.module.css";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';


const Photo = () => {
 
  return (
    <StylesProvider injectFirst>
      <Paper elevation={1} className={styles.photo_paper}>
        <Grid container className={styles.photo_gridContainer}>

      

        {/* <>
            { tripListData.city === "Gdynia" ? <img src={Gdynia} alt="complex"  className={styles.photo_img}/> : null }
            { tripListData.city === "Gdańsk" ? <img src={Gdansk} alt="complex"  className={styles.photo_img}/> : null }
            { tripListData.city === "Sopot" ? <img src={Sopot} alt="complex"  className={styles.photo_img}/> : null }
            
        </> */}

}          
                    <Avatar alt="Avatar_photo" className={styles.photo_avatar}/>
                    <Typography className={styles.photo_text}>
    
               
   
           
          

            <InputLabel >Photo</InputLabel>
              <NativeSelect >
                <option value={""} ></option>
                <option value={"Gdansk"}>Gdańsk</option>
                <option value={'Gdynia'}>Gdynia</option>
                <option value={"Sopot"}>Sopot</option>
              </NativeSelect>
            <FormHelperText>Destiny of your trip</FormHelperText>
            </Typography> 
 

        </Grid>
      </Paper>
    </StylesProvider>
  );
};

export default Photo;