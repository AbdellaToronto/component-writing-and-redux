import React from 'react';
import './App.css';
import { FancyButton } from './components/my-button';
import { UserCard } from './components/user-item';

export default () => <div>
  <h1>Architectural Example</h1>
  <FancyButton onClick={() => alert('clicked button')}>Hello</FancyButton>
  <UserCard
    user={{name: 'Della', data: 'Some random data here'}}
    actionLabel="Delete User"
    onUserAction={(user)=> alert(`${user.name}: user deleted`)}
  />
</div>;
