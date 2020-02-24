import React from 'react';
import style from './TripList.module.css';
import Container from '@material-ui/core/Container';

export default function ShortDescription ({tripListData})  {
    return (
      <Container maxWidth="sm" className={style.shortDescriptionContainer}> 
          <div>For {tripListData.numberOfPeople}, during {tripListData.tripLength}, in the {tripListData.seasonTime}.</div>
      </Container>
    )
  }