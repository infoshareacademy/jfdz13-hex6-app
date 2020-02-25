import React from 'react';
import tripListData from './TripListData.js'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ScrollDialog from './Button';
import Description from './Description'

import { StylesProvider } from '@material-ui/core/styles';
import style from './TripList.module.css';

export default function CenteredGrid() {
  return (
    <StylesProvider injectFirst>  
      {tripListData.map(item => (
        <Paper className={style.paper} elevation={3}  key={item.id}>
          <Container maxWidth="sm" className={style.cityNameContainer}> 
            <div>{item.city} </div>
          </Container>
          <Container maxWidth="sm" className={style.descriptionContainer}> 
            <Description tripListData={item}/>
          </Container>
          <ScrollDialog tripListData={item}/>
        </Paper>
      ))}
    </StylesProvider>
  );
}

