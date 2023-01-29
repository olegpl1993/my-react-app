import './MuiSlider.css';
import { useRef } from 'react';
import mem1 from './mem1.jpg';
import mem2 from './mem2.png';
import mem3 from './mem3.jpg';
import mem4 from './mem4.png';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';

function MuiSlider() {
  const btnL = useRef(null);
  const btnR = useRef(null);
  const sliderRow = useRef(null);
  let slideLeft = 0; //хранит состояние CSS свойста left

  //функция меняет положение блока
  const changeLeft = () => { sliderRow.current.style.left = `${slideLeft}px` }

  const disabled05s = () => { // отключает кнопку на 0,5сек
    btnL.current.disabled = true;
    btnR.current.disabled = true;
    setTimeout(() => {
      btnL.current.disabled = false;
      btnR.current.disabled = false;
    }, 500)
  }

  const clickLeft = () => {
    if (slideLeft === 0) slideLeft = -2100;
    else slideLeft += 700;
    disabled05s();
    changeLeft();
  }
  const clickRight = () => {
    if (slideLeft > -2100) slideLeft -= 700;
    else slideLeft = 0;
    disabled05s();
    changeLeft();
  }

  return (
    <div className="muiSlider">
      <Button variant="contained" onClick={clickLeft} ref={btnL} sx={{ fontSize: 18 }}>Left</Button>
      <Paper elevation={12}>
        <div className="muiSlider__box">
          <div className="muiSlider__row" ref={sliderRow}>
            <img className='muiSlider__card' src={mem1} alt="mem1" />
            <img className='muiSlider__card' src={mem2} alt="mem2" />
            <img className='muiSlider__card' src={mem3} alt="mem3" />
            <img className='muiSlider__card' src={mem4} alt="mem4" />
          </div>
        </div>
      </Paper>
      <Button variant="contained" onClick={clickRight} ref={btnR} sx={{ fontSize: 18 }}>Right</Button>
    </div>
  );
}

export default MuiSlider;
