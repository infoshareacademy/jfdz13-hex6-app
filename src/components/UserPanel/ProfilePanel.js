import React from "react";
import { Paper, Grid, Typography,} from "@material-ui/core";
import styles from "./UserPanel.module.css";
import { RANDOMCALL } from "./randomcall";
import AppAvatar from "./Avatar";
import AvatarChange from "./AvatarChange";


const ProfilePanel = () => {
  const randomId = Math.floor(Math.random() * 5) + 1;
  const userName = "Ada";
  return (
    <Paper elevation={1} className={styles.paper}>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={styles.avatarContainer}>
        <AvatarChange></AvatarChange>
          {/* <AppAvatar></AppAvatar> */}
        </div>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          Hi there!
        </Typography>
        <div>
          <Typography variant="h6">
            {RANDOMCALL.filter((randomcall) => {
              return randomcall.id === randomId;
            }).map((randomcall) => {
              return randomcall.text;
            })}
          </Typography>
        </div>
      </Grid>
    </Paper>
  );
};

export default ProfilePanel;
