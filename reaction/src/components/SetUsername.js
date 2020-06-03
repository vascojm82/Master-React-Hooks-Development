import React from 'react';
import { useAppContext } from './hooks';
import { setUserName } from '../state/actions';

function SetUsername() {
  let { state: { username }, dispatch } = useAppContext();

  let updateUsername = event => {
    dispatch(setUserName(event.target.value));
  }

  return(
    <div>
      <h3>Username</h3>
      <input onChange={updateUsername} value={username} />
    </div>
  );
}

export default SetUsername;
