import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './Dashboard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MyPieChart from './PieChart';

const useStyles = makeStyles(() => ({
  paperLeft: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '80px',
    '& > *': {
      width: '30vw',
      height: '100vh',
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '0',
      borderTopLeftRadius: '25px',
      borderTopRightRadius: '0',
    },
  },
  paperLeftContent: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingTop: '50px', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '30vw',
    height: '80vh',
  }
}));

export default function Dashboard() {
    const classes = useStyles();
  return (
      <Container maxWidth="xl" disableGutters={true}>
        <Typography className={styles.dashboardContainer} component="div">
            <div className={styles.dashboardContainerRight}>
            <MyPieChart/>
            </div>
            <div className={classes.paperLeft}>
            <Paper elevation={1} className={classes.paperLeftContent}>
            <img style={{ height: 'auto', width:'50%'}} alt="" src="/Graphics/comments.svg"></img>
            <h4 style={{ marginTop: '30px', marginBottom: '10px', fontWeight: '400'}}>EXPLORE THE TRI CITY WITH US!</h4>
            <Button variant="outlined" size="small" color="primary" >GO NOW</Button>
            </Paper>
            </div>
        </Typography>
      </Container>
  );
}
