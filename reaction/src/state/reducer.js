import { NEW_MESSAGE } from './types';

export let initialState = {messages: []};

let reducer = (state, action) => {
  switch(action.type){
    case NEW_MESSAGE:
      return {...state, messages: [...state.messages, action.item]}
    default:
      return state;
  }
}

export default reducer;
