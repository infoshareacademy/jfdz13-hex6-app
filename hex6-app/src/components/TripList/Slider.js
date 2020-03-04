import React from 'react';
import Slider from '@material-ui/core/Slider';
import styles from './TripList.module.css';


export default function SiteSlider ({tripListData}) {

  return (
    <div className={styles.slider_sliderContainer}>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}> Sport: </span> <Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.slider.sport} aria-labelledby="continuous-slider" />{tripListData.slider.sport}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Monuments: </span> <Slider  className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.slider.monuments} aria-labelledby="continuous-slider" />{tripListData.slider.monuments}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Party: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.slider.party} aria-labelledby="continuous-slider" />{tripListData.slider.party}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Hotels: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.slider.hotels} aria-labelledby="continuous-slider" />{tripListData.slider.hotels}</div>
      <div className={styles.slider_singleSlider}><span className={styles.slider_sliderName}>Restaurants: </span><Slider className={styles.slider_sliderBar} disabled max={5} defaultValue={tripListData.slider.restaurants} aria-labelledby="continuous-slider" />{tripListData.slider.restaurants}</div>
    </div>
  );
}
