import React from "react";
import { Grid } from "@material-ui/core";
import Photo from "./Photo";
import AddMainInformation from "./AddMainInformation";
import AddDetails from './AddDetails'
import AddDescription from './AddDescription'
import { Container} from "@material-ui/core";
import styles from "./UserPanel.module.css";
import Buttons from "./Buttons"

const initialState = {
  //id dodać !!
  name: "",
  city: "",
  numberOfPeople: "",
  seasonTime: "",
  tripLength: "",
  price: 0,
  rating: 0,
  description: "",
  slider: {
      sport: 0,
      monuments: 0,
      party: 0,
      hotels: 0,
      restaurants: 0
  }
};

class AddTripPanel extends React.Component {
  state = {
    ...initialState
};

handleOnChange = (event) => {
  event.preventDefault();
  
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log(event.target.value)
};

handleSubmit = () => {
    fetch('https://hex6-app.firebaseio.com/TripList.json', {
        method: "POST",
        body: JSON.stringify(this.state)
    })
    .then(() => {
        this.setState(initialState);
    })
};

  render () {
    return (
      <>
        <Container className={styles.addTripPanel_container} maxWidth="lg">
          <Grid container spacing={2} className={styles.addTripPanel_mainGridContainer}>
            <Grid item xs={4}>
              <Photo/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <AddMainInformation onChange={this.handleOnChange}/>
            </Grid>
            <Grid item xs={4}>
              <AddDetails onChange={this.handleOnChange} value={this.state.value}/>
            </Grid>
            <Grid item xs={8}>
              <AddDescription onChange={this.handleOnChange}/>
            </Grid>
          </Grid>
          <Buttons onClick={this.handleSubmit}/>
        </Container>
      </>
    );
  };
}

export default AddTripPanel;
