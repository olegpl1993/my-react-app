import './Counter.css';
import { useState } from 'react';

function Counter() {
  const [likes, setLikes] = useState(0);
  const increment = () => setLikes(likes + 1);
  const decrement = () => setLikes(likes - 1);

  return (
    <div className="counter">
      <button className='counter__button button' onClick={increment}>Increment</button>
      <button className='counter__button button' onClick={decrement}>Decrement</button>
      <div className="counter__likes">{likes}</div>
    </div>
  )
}

export default Counter;