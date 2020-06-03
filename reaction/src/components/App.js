import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import PubSub from '../pubsub';
import SetUsername from './SetUsername';

const pubSub = new PubSub();

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubSub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;

        console.log('Received message', message, 'channel', channel);
        dispatch(message);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubSub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
