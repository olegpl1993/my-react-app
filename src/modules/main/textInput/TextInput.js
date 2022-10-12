import { useState } from "react";
import './TextInput.css';

function TextInput() {
  const [value, setValue] = useState('');
  const inputText = value => setValue(value);
  return (
    <div className="textInput">
      <input className='textInput__input' type="text" placeholder='print here' onInput={e => { inputText(e.target.value) }} />
      <div className="textInput__value">{value}</div>
    </div>
  )
}
export default TextInput;