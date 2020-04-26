import React from 'react';
import { Button, Paper } from "@material-ui/core";
import styles from "./UserPanel.module.css";

export default function Buttons ({onClick})  {
    return(
        <Paper className={styles.buttons_paper}>
            <div className={styles.buttons_div}>
                <Button variant="outlined" color="primary" onClick={onClick} >
                    SAVE
                </Button>
            </div>
        </Paper>
    )
}
