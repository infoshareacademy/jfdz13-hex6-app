import React from 'react';
import Typography from "@material-ui/core/Typography";

const PageWrapper = (props) => {
    return <>
            <div style={{padding: 30}}>
                <Typography variant="h3" component="h2">
                    {props.title}
                </Typography>
                {props.children}
            </div>
        </>
};

export default PageWrapper;
