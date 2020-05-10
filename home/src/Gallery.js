import  React, {useState} from 'react';
import PICTURES from './data/pictures';
import { useDynamicTransition } from './hooks';

const SECONDS = 1000;
const MINIMUM_DELAY = 1 * SECONDS;
const MINIMUM_INCREMENT = 1;

function Gallery(){
  let [delay, setDelay] = useState(3 * SECONDS);
  let [increment, setIncrement] = useState(1);

              //Call to custom Hook
  let index = useDynamicTransition({delay, increment, length: PICTURES.length});

  let updateDelay = event => {
    let delay = (event.target.value === '0')? MINIMUM_DELAY: parseInt(event.target.value) * SECONDS;
    setDelay(delay);
  }

  let updateIncrement = event => {
    let increment = parseInt(event.target.value);
    setIncrement(increment < MINIMUM_INCREMENT? MINIMUM_INCREMENT: increment);
  }

  return(
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Gallery increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
