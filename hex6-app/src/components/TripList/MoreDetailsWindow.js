import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Raiting from './Raiting'
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
      <Button className={styles.moreDetailsText} onClick={handleClickOpen('paper')} >MORE DETAILS</Button>

      <Dialog  open={open} onClose={handleClose} scroll={scroll}>
        <DialogTitle>{tripListData.name} <Raiting tripListData={tripListData}/> </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
            <Description tripListData={tripListData}/>
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'}>
            {tripListData.description}
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'}>
            <SiteSlider tripListData={tripListData}/>
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'}>
            {tripListData.price}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </StylesProvider> 
  );
}