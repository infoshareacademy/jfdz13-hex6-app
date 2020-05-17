import React from "react";
import Card from "@material-ui/core/Card";
import styles from "./Dashboard.module.css";
import Opinions from "./Opinions"


class OpinionBox extends React.Component {

  constructor () {
    super ();
    this.state = {
      testimonialsList: [],
    };
  }
  
  componentDidMount () {
  fetch('https://hex6-app.firebaseio.com/testimonials.json')
  .then(results => results)
  .then(results => results.json())
  .then(testimonialsList => this.setState({testimonialsList}))
  };

  render() {
    const { testimonialsList } = this.state;
    return (
      <Card className={styles.opinionBox} variant="outlined">
        <div className={styles.opinionGraphic}>
        <img style={{ minHeight: "50px", maxHeight: "180px", width: "auto", marginTop: "13px" }} alt="" src="/Graphics/comments.svg"></img>
        <p className={styles.opinionTitle}>Best reviews</p>
        </div>
        {testimonialsList.map(item => (
        <Opinions testimonialsListData={item} key={item.id}/>
        ))}
      </Card>
    );
  }
}

export default OpinionBox;