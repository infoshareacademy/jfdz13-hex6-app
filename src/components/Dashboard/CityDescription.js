import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import InstagramIcon from '@material-ui/icons/Instagram';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography color="primary" variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),

  },
}))(MuiDialogContent);

export default function Description({citiesListData}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
      variant="outlined"
      size="small"
      color="primary"
      margin="10px"
      onClick={handleClickOpen}>
          MORE DETAILS</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} id={Description}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {citiesListData.name}
        </DialogTitle>
        <DialogContent dividers>
        <CardMedia
        component="img"
        height="200"
        image={citiesListData.photo}
        title={citiesListData.name}
      />
      <br></br>
          <Typography variant="body2" gutterBottom>
          {citiesListData.description}
          </Typography>
          <br></br>
          <Button 
      variant="outlined"
      size="small"
      color="primary"
      margin="10px"
      target="_blank" 
      startIcon={<InstagramIcon />}
      href= {citiesListData.insta}>
          VISIT THE CITY</Button>
        </DialogContent>
      </Dialog>
    
    </div>
  );
}