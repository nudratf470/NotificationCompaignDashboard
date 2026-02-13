import React from 'react';
import { Button } from 'react-bootstrap';
import './YellowRoundedButton.css';  // make sure extension is correct

const YellowRoundedButton = ({ label }) => {
  return (
    <Button className='yellowRoundedButton'>{label}</Button>
  );
}

export default YellowRoundedButton;
