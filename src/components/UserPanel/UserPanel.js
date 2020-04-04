import React from "react";
import { Grid } from "@material-ui/core";
import ProfilePanel from "./ProfilePanel";
import UserData from "./UserData";
import FavoriteTripList from "./FavoriteTripList";
import { Container } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const UserPanel = () => {
  return (
    <>
      <Container style={{ marginTop: "100px", marginBottom: "100px" }} maxWidth="lg">

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <ProfilePanel className={styles.profilepanel} />
          </Grid>
          <Grid item xs={12} sm={8}> 
            <UserData />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserPanel;
