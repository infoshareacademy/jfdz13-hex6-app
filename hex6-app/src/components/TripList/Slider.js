import React from 'react';
import Slider from '@material-ui/core/Slider';
import styles from './TripList.module.css';
import tripListData from './TripListData.js'

export default function SiteSlider ({tripListData}) {

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}><span className={styles.slideName}> Sport: </span> <Slider className={styles.slideBar} disabled max={5} defaultValue={tripListData.slider.sport} aria-labelledby="continuous-slider" />{tripListData.slider.sport}</div>
      <div className={styles.slider}><span className={styles.slideName}>Monuments: </span> <Slider  className={styles.slideBar} disabled max={5} defaultValue={tripListData.slider.monuments} aria-labelledby="continuous-slider" />{tripListData.slider.monuments}</div>
      <div className={styles.slider}><span className={styles.slideName}>Party: </span><Slider className={styles.slideBar} disabled max={5} defaultValue={tripListData.slider.party} aria-labelledby="continuous-slider" />{tripListData.slider.party}</div>
      <div className={styles.slider}><span className={styles.slideName}>Hotels: </span><Slider className={styles.slideBar} disabled max={5} defaultValue={tripListData.slider.hotels} aria-labelledby="continuous-slider" />{tripListData.slider.hotels}</div>
      <div className={styles.slider}><span className={styles.slideName}>Restaurants: </span><Slider className={styles.slideBar} disabled max={5} defaultValue={tripListData.slider.restaurants} aria-labelledby="continuous-slider" />{tripListData.slider.restaurants}</div>
    </div>
  );
}
