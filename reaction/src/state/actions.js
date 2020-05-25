import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

export let newMessage = text => {
  return {
    type: NEW_MESSAGE,
    item: { id: uuid(), text, timestamp: Date.now() }
  }
}
