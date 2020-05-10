import React, {useState} from 'react';
import MATRIX_FRAMES from './data/matrix';
import { useDynamicTransition } from './hooks';

const MINIMUM_DELAY = 10;
const MINIMUM_INCREMENT = 1;

function Matrix(){
  let [delay, setDelay] = useState(500);
  let [increment, setIncrement] = useState(5);

  //Call to custom Hook
  let index = useDynamicTransition({delay, increment, length: MATRIX_FRAMES.length});

  let updateDelay = event => {
    let delay = parseInt(event.target.value);
    setDelay(delay<MINIMUM_DELAY ? MINIMUM_DELAY: delay);
  }

  let updateIncrement = event => {
    let increment = parseInt(event.target.value);
    setIncrement(increment<MINIMUM_INCREMENT ? MINIMUM_INCREMENT: increment);
  }

  return(
    <div className="Matrix">
      <img src={MATRIX_FRAMES[index]} alt="matrix-animation" />
      <div className="multiform">
        <div>
          Frame transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Frame increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
