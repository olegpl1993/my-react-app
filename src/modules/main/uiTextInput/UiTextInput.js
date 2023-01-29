import { useState } from "react";
import './UiTextInput.css';
import { TextField } from "@mui/material";

function UiTextInput() {
  const [value, setValue] = useState('');
  const inputText = value => setValue(value);
  return (
    <div className="uiTextInput">
      <TextField
        id="outlined-basic"
        label="print here"
        variant="outlined"
        size="large"
        onInput={e => { inputText(e.target.value) }}
      />
      <div className="uiTextInput__value">{value}</div>
    </div>
  )
}
export default UiTextInput;