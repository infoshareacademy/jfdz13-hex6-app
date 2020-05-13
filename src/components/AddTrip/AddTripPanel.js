import React from "react";
import { Grid } from "@material-ui/core";
import Photo from "./Photo";
import AddMainInformation from "./AddMainInformation";
import AddDetails from './AddDetails'
import AddDescription from './AddDescription'
import { Container} from "@material-ui/core";
import styles from "./UserPanel.module.css";
import Buttons from "./Buttons"
import { Paper } from "@material-ui/core";

const initialState = {
  id: 0,
  name: "",
  city: "",
  numberOfPeople: "",
  seasonTime: "",
  tripLength: "",
  price: "",
  rating: 0,
  description: "",
  sport: 0,
  monuments: 0,
  party: 0,
  hotels: 0,
  restaurants: 0
};

class AddTripPanel extends React.Component {
  state = {
    ...initialState
};

generateRandomNumber = () => {
  return Math.floor(Math.random()*1000);
}

handleOnChange = (event) => {
  event.preventDefault();
  
    this.setState({
        id: this.generateRandomNumber(),
        [event.target.name]: event.target.value
    })
  console.log(event.target.name)
  console.log(event.target.value)
};

handleOnChangeSlider = name => (event, value) => {
  event.preventDefault();

    this.setState({
        id: this.generateRandomNumber(),
        [name]: value
    });
};

handleSubmit = () => {
    fetch(`https://hex6-app.firebaseio.com/TripList.json`, {
        method: "POST",
        body: JSON.stringify(this.state)
    })
    .then(() => {
        this.setState(initialState);
    })
    
};

handleReset = () => {
  this.setState ({
    ...initialState
  })
}

  render () {
    return (
      <>
        <Container className={styles.addTripPanel_container} maxWidth="lg">
          <Grid container spacing={2} className={styles.addTripPanel_mainGridContainer}>
            <Grid item xs={4}>
              <Photo city={this.state.city}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <AddMainInformation onChange={this.handleOnChange} details={this.state} />
            </Grid>
            <Grid item xs={4}>
              <AddDetails onChange={this.handleOnChangeSlider} details={this.state}/>
            </Grid>
            <Grid item xs={8}>
              <AddDescription onChange={this.handleOnChange} details={this.state}/>
            </Grid>
          </Grid>
          <Paper className={styles.buttons_paper}>
             <Buttons onClick={this.handleSubmit} name={"SAVE"}/>
             <Buttons onClick={this.handleReset} name={"RESET"}/>
          </Paper>
        </Container>
      </>
    );
  };
}

export default AddTripPanel;
