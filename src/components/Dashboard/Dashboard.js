import React from 'react';
import Container from '@material-ui/core/Container';
import AboutCity from './AboutCity';

import styles from './Dashboard.module.css';
import VideoBox from './VideoBox';
import MyPieChart from './PieChart';
import OpinionBox from './OpinionBox';


export default function Dashboard() {
    return (
      <>
        <Container maxWidth="xl" disableGutters={true}>
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
      </>
)};
