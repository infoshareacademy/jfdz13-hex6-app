import React from 'react';
import style from './TripList.module.css';
import tripListData from './TripListData.js'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import ScrollDialog from './MoreDetailsButton';
import ShortDescription from './ShortDescription'

export default function CenteredGrid() {
  return (
    <>  
      {tripListData.map(item => (
        <Paper elevation={3} className={style.paper} key={item.id}>
          <Container maxWidth="sm" className={style.cityNameContainer}> 
            <div>{item.city} </div>
          </Container>
          <Container maxWidth="sm" className={style.descriptionContainer}> 
            <ShortDescription tripListData={item}/>
          </Container>
          <ScrollDialog className={style.moreDetailsButton} tripListData={item}/>
        </Paper>
      ))}
    </>
  );
}

