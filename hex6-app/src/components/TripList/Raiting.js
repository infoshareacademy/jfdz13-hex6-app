import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function Raiting ({tripListData}){
    return (
        <>
            { tripListData.raiting === 1 ? <><StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null } 
            { tripListData.raiting === 2 ? <><StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null }
            { tripListData.raiting === 3 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /></> : null }
            { tripListData.raiting === 4 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /></> : null }
            { tripListData.raiting === 5 ? <><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /></> : null }
        </>
    );
}