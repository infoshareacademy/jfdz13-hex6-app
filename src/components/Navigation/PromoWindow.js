import React from "react";
import styles from './Navigation.module.css';
import Button from '@material-ui/core/Button';




  
  export default function PromoWindow() {


    return (
      <div className={styles.promoWindow}>
          <img style={{ height: 'auto', width:'50%'}} alt="" src="/Graphics/plan-your-trip.svg"></img>
          <h4 style={{ marginTop: '30px', marginBottom: '10px', fontWeight: '400'}}>EXPLORE THE TRI CITY WITH US!</h4>
          <Button variant="outlined" size="small" color="primary" >GO NOW</Button>
      </div>
    );
  }