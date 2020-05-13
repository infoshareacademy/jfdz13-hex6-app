import React from 'react';
import { Button} from "@material-ui/core";
import styles from "./UserPanel.module.css";

export default function Buttons ({onClick, name})  {
    return(
        
            <div className={styles.buttons_div}>
                <Button variant="outlined" color="primary" onClick={onClick} type="submit" >
                    {name}
                </Button>
            </div>
    )
}
