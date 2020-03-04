import React from 'react';
import tripListData from '../../../public/TripListData.js/index.js'

import ComplexGrid from "./TripListGridContainer"

export default function CenteredGrid() {
  return (
    <>
    {tripListData.map(item => (
      <ComplexGrid tripListData={item} key={item.id}/>
    ))}
    </>
  );
}

