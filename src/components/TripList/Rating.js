import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function Rating ({tripListData}){
    return (
        <>
            { tripListData.rating === 1 ? <><StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null } 
            { tripListData.rating === 2 ? <><StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null }
            { tripListData.rating === 3 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null }
            { tripListData.rating === 4 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /></> : null }
            { tripListData.rating === 5 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /></> : null }
        </>
    );
}