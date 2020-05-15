import React from 'react';
import styles from '../TripList/TripList.module.css'

import TripListItem from "../TripList/TripListItem"


class FavouriteTripItem extends React.Component {

    constructor () {
        super ();
        this.state = {
          favs: [],
        }
    };

fetchFavs = () => {
    if (this.props.user) {
      fetch(
        `https://hex6-app.firebaseio.com/userData/${this.props.user.uid}.json`
      )
        .then(resp => resp.json())
        .then(favs => {
          const arrayFavs = favs ? Object.keys(favs).map(key => favs[key]) : [];
          this.setState({
            ...this.state,
            favs: arrayFavs,
          });
        });
        
    }
  };
  

  componentDidMount () {
    this.fetchFavs();
  }

render () {
    return <>
                {this.state.favs.includes(this.props.tripListData.id) === true &&
                    <div className={styles.tripList_container}>
                        <TripListItem tripListData={this.props.tripListData} user={this.props.user}/>
                    </div>
                
                }
            </>
}
};

export default FavouriteTripItem;