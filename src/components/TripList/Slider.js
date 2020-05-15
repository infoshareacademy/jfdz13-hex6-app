import React from 'react';
import Slider from '@material-ui/core/Slider';
import styles from './TripList.module.css';


export default function SiteSlider ({tripListData}) {

  return (
    <div className={styles.slider_sliderContainer}>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Sport: </span> <Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.sport} aria-labelledby="continuous-slider" />{tripListData.sport}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Monuments: </span> <Slider  className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.monuments} aria-labelledby="continuous-slider" />{tripListData.monuments}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Party: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.party} aria-labelledby="continuous-slider" />{tripListData.party}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Hotels: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.hotels} aria-labelledby="continuous-slider" />{tripListData.hotels}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Restaurants: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.restaurants} aria-labelledby="continuous-slider" />{tripListData.restaurants}</div>
    </div>
  );
}
