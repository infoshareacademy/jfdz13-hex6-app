import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Rating from './Rating'
import Description from './Description'
import SiteSlider from './Slider'

import { StylesProvider } from '@material-ui/core/styles';
import styles from './TripList.module.css';

export default function MoreDetailsWindow ({tripListData}) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StylesProvider injectFirst> 
      <Button variant="outlined" color="primary"  onClick={handleClickOpen('paper')} >MORE DETAILS</Button>

      <Dialog  open={open} onClose={handleClose} scroll={scroll} id={MoreDetailsWindow}>
        <h2 className={styles.moreDetailsWindow_title}>
            <div>{tripListData.name}</div>
            <div className={styles.moreDetailsWindow_ratingDiv}><Rating tripListData={tripListData}/></div>
        </h2>
        <DialogContent dividers={scroll === 'paper'} className={styles.moreDetailsWindow_description}>
            <Description  tripListData={tripListData} />
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'} className={styles.moreDetailsWindow_mainDescription} >
            {tripListData.description}
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'} className={styles.moreDetailsWindow_siteSlider}>
            <SiteSlider tripListData={tripListData}/>
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'} className={styles.moreDetailsWindow_price}>
           Price: {tripListData.price} PLN
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.moreDetailsWindow_cancelButton}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </StylesProvider> 
  );
}