import React from 'react';
import { Button } from 'react-bootstrap';
import './YellowRoundedButton.css';  // make sure extension is correct

const YellowRoundedButton = ({ label,onClick }) => {
  return (
    <Button type="button" className='yellowRoundedButton' onClick={onClick}>{label}</Button>
  );
}

export default YellowRoundedButton;
