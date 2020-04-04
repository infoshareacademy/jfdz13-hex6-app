import React from "react";
import { Grid } from "@material-ui/core";
import Photo from "./Photo";
import AddMainInformation from "./AddMainInformation";
import AddDetails from './AddDetails'
import AddDescription from './AddDescription'
import { Container } from "@material-ui/core";

const AddTripPanel = () => {
  return (
    <>
      <Container style={{ marginTop: "100px", marginBottom: "100px" }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Photo/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <AddMainInformation />
          </Grid>
          <Grid item xs={4}>
            <AddDetails />
          </Grid>
          <Grid item xs={8}>
            <AddDescription />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddTripPanel;
