import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StylesProvider } from '@material-ui/core/styles';

import Photo from './Photo';
import Description from './Description'
import MoreDetailsWindow from './MoreDetailsWindow'

import styles from './TripList.module.css'

export default function ComplexGrid({tripListData}) {
  return (
    <StylesProvider injectFirst> 
    <Paper className={styles.tripListGridContainer_paper}>
        <Grid container>
        <Grid item>
            <Photo  tripListData={tripListData} />
        </Grid>
        <Grid item sm container >
            <Grid item xs>
            <Grid item>
                <div className={styles.tripListGridContainer_title} >
                {tripListData.name}
                </div>
            </Grid>
            <Grid item>               
                <Description tripListData={tripListData} />
            </Grid>
            <Grid item className={styles.tripListGridContainer_button}>
                <MoreDetailsWindow tripListData={tripListData}/>
            </Grid>
            </Grid>
            <Grid item className={styles.tripListGridContainer_price}>
                <div >{tripListData.price} PLN</div>
            </Grid>
        </Grid>
        </Grid>
    </Paper>
    </StylesProvider>
  );
}