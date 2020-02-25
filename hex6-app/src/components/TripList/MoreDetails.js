import React from 'react';

export default function MoreDetails ({tripListData}) {
    return (
        <> 
            <div>CITY: {tripListData.city}</div>
            <div>FOR: {tripListData.numberOfPeople}</div>
            <div>DURING: {tripListData.tripLength}</div>
            <div>IN: {tripListData.seasonTime}</div>
            <div>FOR: {tripListData.price} PLN</div>
            <div>{tripListData.description}</div>
        </>
    );
}
