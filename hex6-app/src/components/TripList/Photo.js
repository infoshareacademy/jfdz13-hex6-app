import React from 'react';

import Gdansk from './Gdańsk.jpg'
import Sopot from './Sopot.jpg'
import Gdynia from './Gdynia.jpg'

import styles from './TripList.module.css'

export default function Photo ({tripListData}){
    return (
        <>
            { tripListData.city === "Gdynia" ? <img src={Gdynia} alt="complex"  className={styles.img}/> : null }
            { tripListData.city === "Gdańsk" ? <img src={Gdansk} alt="complex"  className={styles.img}/> : null }
            { tripListData.city === "Sopot" ? <img src={Sopot} alt="complex"  className={styles.img}/> : null }
            
        </>
    );
}