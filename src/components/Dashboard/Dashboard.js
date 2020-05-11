import React from 'react';
import Container from '@material-ui/core/Container';
import AboutCity from './AboutCity';

import styles from './Dashboard.module.css';
import VideoBox from './VideoBox';
import MyPieChart from './PieChart';
import OpinionBox from './OpinionBox';
import UserProvider from '../providers/UserProvider'

export default function Dashboard() {
  return ( <UserProvider>
    {(user) => {
    return (
      <>
      {user
        ? <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.dashboardContainer}>
  
          <div className={styles.dashboardContainerLeft }>
          <div className={styles.dashboardContainerLeftUp }>
            <VideoBox/>
          </div>
          <div className={styles.dashboardContainerLeftDown }>
            <AboutCity/>
          </div>
          </div>
  
          <div className={styles.dashboardContainerRight }>
          <MyPieChart/>
          <OpinionBox/>
          </div>
          </div>
      </Container>
        :  <h1 style={{ marginTop: '100px'}}>HELLLOOOO ZALOGUJ SIE</h1>
        }
      </>
)}}
</UserProvider>
  )}
