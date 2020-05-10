import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';
import Matrix from './Matrix';

function App() {
  let [userQuery, setUserQuery] = useState('');
  let [showGallery, setShowGallery] = useState(true);

  let updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  }

  let handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  }

  let searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  let toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1>Hello David</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ? <Gallery />: null
        }
        <button onClick={toggleShowGallery}>{showGallery? 'Hide': 'Show'} Gallery</button>
      </div>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
