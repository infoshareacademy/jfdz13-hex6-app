import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EventIcon from '@material-ui/icons/Event';
import TodayIcon from '@material-ui/icons/Today';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import styles from './TripList.module.css'

export default function Description ({tripListData})  {

  return (
        <div className={styles.description_mainContainer}>
          <div className={styles.description_singleElement}>
          {tripListData.numberOfPeople === "single" ? <PersonIcon className={styles.description_icon}/> : null }
          {tripListData.numberOfPeople === "couple" ? <PeopleIcon className={styles.description_icon}/> : null }
          {tripListData.numberOfPeople === "family with kids" ? <ChildFriendlyIcon className={styles.description_icon}/> : null }
          {tripListData.numberOfPeople}
          </div> 
          <div className={styles.description_singleElement}>       
          {tripListData.tripLength === "weekend" ? <EventIcon className={styles.description_icon}/>: null }
          {tripListData.tripLength === "5 days" ? <TodayIcon className={styles.description_icon}/> : null }
          {tripListData.tripLength}
          </div>
          <div className={styles.description_singleElement}>
          {tripListData.seasonTime === "summer" ? <WbSunnyIcon className={styles.description_icon}/> : null }
          {tripListData.seasonTime === "winter" ? <AcUnitIcon className={styles.description_icon}/> : null }
          {tripListData.seasonTime}
          </div>
        </div>
  )
  }