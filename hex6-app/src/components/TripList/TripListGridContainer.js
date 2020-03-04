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
        <Grid>
            <Photo  tripListData={tripListData} />
        </Grid>
        <Grid sm container >
            <Grid xs>
            <Grid>
                <div className={styles.tripListGridContainer_title} >
                {tripListData.name}
                </div>
            </Grid>
            <Grid>               
                <Description tripListData={tripListData} />
            </Grid>
            <Grid className={styles.tripListGridContainer_button}>
                <MoreDetailsWindow tripListData={tripListData}/>
            </Grid>
            </Grid>
            <Grid className={styles.tripListGridContainer_price}>
                <div >{tripListData.price} PLN</div>
            </Grid>
        </Grid>
        </Grid>
    </Paper>
    </StylesProvider>
  );
}