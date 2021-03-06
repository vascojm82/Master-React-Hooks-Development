import React, { useState } from 'react';
import Joke from './Joke.js';
import Tasks from './Tasks';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const updateUserQuery = event => {
    console.log('userQuery', userQuery);
    setUserQuery(event.target.value);
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      searchQuery();
    }
  }

  return (
    <div className="App">
      <h1>Hello Jose</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} />
        <button onClick={searchQuery} onKeyPress={handleKeyPress}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
    </div>
  );
}

export default App;
