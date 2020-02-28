import React from 'react';
import tripListData from './TripListData.js'

import ComplexGrid from "./TripListGridContainer"

import { StylesProvider } from '@material-ui/core/styles';
import style from './TripList.module.css';

export default function CenteredGrid() {
  return (
    <>
    {tripListData.map(item => (
      <ComplexGrid tripListData={item}/>
    ))}
    </>
  );
}

