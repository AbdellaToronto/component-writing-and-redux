import React from 'react';
import { FancyButton } from './my-button';

const cardStyle = {
  backgroundColor: '#e6e6e6',
  width: '400px',
  height: '300px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export const UserCard = ({user, actionLabel, onUserAction}) =>
  <div style={cardStyle}>
    <h2>Name: {user.name}</h2>
    <h3>data: {user.data}</h3>
    <FancyButton onClick={() => onUserAction(user)}>{actionLabel}</FancyButton>
  </div>;