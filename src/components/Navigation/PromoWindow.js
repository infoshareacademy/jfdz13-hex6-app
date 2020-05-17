import React from "react";
import styles from './Navigation.module.css';
import Button from '@material-ui/core/Button';
import UserProvider from "../providers/UserProvider";


  
  export default function PromoWindow() {
    return (
    <div className={styles.promoWindow}>
          <img style={{ height: 'auto', width:'50%', marginTop:'40px'}} alt="" src="/Graphics/plan-your-trip.svg"></img>
          <h4 style={{ marginTop: '30px', marginBottom: '10px', fontWeight: '400', alignItems:'center'}}>EXPLORE THE TRI CITY WITH US!</h4>
    
          { <UserProvider>
          {(user) => { return user ? null : <Button variant="outlined" size="small" color="primary" href="/sign-in" >GO NOW</Button> 
        }}
          </UserProvider> }
      </div>
    );
  }