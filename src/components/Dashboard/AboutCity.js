import React from "react";
import CityBox from "./CityBox"


class AboutCity extends React.Component {
  constructor () {
    super ();
    this.state = {
      cityList: [],
    };
}

componentDidMount () {
  fetch('https://hex6-app.firebaseio.com/citiesList.json')
  .then(results => results)
  .then(results => results.json())
  .then(cityList => this.setState({cityList}))
};



render () {
  const { cityList } = this.state;
    return (
      <>
        {cityList.map(item => (
          <CityBox citiesListData={item} key={item.id}/>
        ))}
      </>
    )
  } 
}

export default AboutCity;