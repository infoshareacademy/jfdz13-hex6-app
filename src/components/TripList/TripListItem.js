import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StylesProvider } from '@material-ui/core/styles';

import Photo from './Photo';
import Description from './Description'
import MoreDetailsWindow from './MoreDetailsWindow'
import ActionButton from './ActionButton'
import FavoriteIcon from '@material-ui/icons/Favorite';


import styles from './TripList.module.css'

class TripListItem extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
           buttonClicked: false,
        }
      }

    // addToFavouriteTripList = () => {
    //     const newTrip = this.props.tripListData;

    //     this.setState ({
    //         favouriteTripList: [...this.state.favouriteTripList, newTrip]
    //     })
    //     console.log(this.state.favouriteTripList)
    //     // console.log(newTrip)
    // }

    addToFavourite = () => {
        this.setState  ({
            buttonClicked: !this.state.buttonClicked
        })
    }


    
    render() {
        return (
            <StylesProvider injectFirst> 
            <Paper className={styles.tripListItem_paper}>
                <Grid container>
                <Grid item>
                    <Photo  tripListData={this.props.tripListData} />
                </Grid>
                <Grid item sm container >
                    <Grid item xs>
                    <Grid item>
                            <div className={styles.tripListItem_title} >
                            {this.props.tripListData.name}
                            </div>
                    </Grid>
                    <Grid item>               
                        <Description tripListData={this.props.tripListData} />
                    </Grid>
                    <Grid item className={styles.tripListItem_buttonContainer}>
                        <MoreDetailsWindow tripListData={this.props.tripListData} />
                        
                        {(this.state.buttonClicked === false) && <ActionButton className={styles.tripListItem_addFavouriteTrip} content={<FavoriteIcon/>}  onClicked={this.addToFavourite}/>}
                        {(this.state.buttonClicked === true) && <ActionButton className={styles.tripListItem_addFavouriteTrip_red} content={<FavoriteIcon/>}  onClicked={this.addToFavourite}/>}

                    </Grid>
                    </Grid>
                    <Grid item className={styles.tripListItem_price}>
                        <div >{this.props.tripListData.price} PLN</div>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            </StylesProvider>
        );
    }
}

export default TripListItem;