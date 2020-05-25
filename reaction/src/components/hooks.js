import { useContext } from 'react';
import Context from '../context';

export let useAppContext = () => {
  return useContext(Context);
}
