import React from "react";
import Card from "@material-ui/core/Card";
import styles from "./Dashboard.module.css";
import Opinions from "./Opinions"


class OpinionBox extends React.Component {

  render() {
    return (
      <Card className={styles.opinionBox} variant="outlined">
        <div className={styles.opinionGraphic}>
        <img style={{ minHeight: "50px", maxHeight: "180px", width: "auto", marginTop: "13px" }} alt="" src="/Graphics/comments.svg"></img>
        <p className={styles.opinionTitle}>Best reviews</p>
        </div>
        <Opinions/>
      </Card>
    );
  }
}

export default OpinionBox;
