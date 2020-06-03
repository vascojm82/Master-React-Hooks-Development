import React, { useState } from "react";
import { useAppContext } from './hooks';
import { newMessage } from '../state/actions';

function PublishMessage(props){
  let { state: { username }, pubSub: { publish } } = useAppContext();
  let [text, setText] = useState('');

  const updateText = event => {
    setText(event.target.value);
  }

  const publishMessage = () => {
    publish(newMessage({text, username}));
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      publishMessage();
    }
  }

  return(
    <div>
      <h3>Got something to say?</h3>
      <input value={text} onChange={updateText} />
      {' '}
      <button onClick={publishMessage} onKeyPress={handleKeyPress}>Publish it!</button>
    </div>
  );
}

export default PublishMessage;
