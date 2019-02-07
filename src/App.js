import React from 'react';
import './App.css';
import { FancyButton } from './components/my-button';
import { UserCard } from './components/user-item';
import { connect } from 'react-redux';


export default connect((state) => state, {
  deleteUser: (payload) => ({type: 'DELETE', payload})
})
(({mainUser, otherUsers, deleteUser}) => <div>
  <h1>Architectural Example</h1>
  <FancyButton onClick={() => alert('clicked button')}>Hello</FancyButton>
  <UserCard
    user={mainUser}
    actionLabel="Nav To User"
    onUserAction={(user)=> alert(`${user.name}: Navigated away!`)}
  />


  <h1>User List</h1>
  {otherUsers.map(user => (
    <UserCard
      user={user}
      actionLabel="Delete user"
      onUserAction={deleteUser}
    />))}
</div>);
