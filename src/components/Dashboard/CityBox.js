import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./Dashboard.module.css";
import Description from "./CityDescription"

class CityBox extends React.Component {

  render() {
    return (
      <Card className={styles.cityContainer} variant="outlined">
        <CardContent style={{ padding: "0" }}>
          <p className={styles.cityName}> {this.props.citiesListData.name} </p>
          <p className={styles.citySymbols}>
            {this.props.citiesListData.symbols}
          </p>
        </CardContent>
        <Description citiesListData={this.props.citiesListData} />
      </Card>
    );
  }
}

export default CityBox;
