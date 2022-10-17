import './Slider.css';
import { useEffect, useRef } from 'react';
import mem1 from './mem1.jpg';
import mem2 from './mem2.png';
import mem3 from './mem3.jpg';
import mem4 from './mem4.png';

function Slider() {
  const btnL = useRef(null) //кнопка влево
  const btnR = useRef(null) //кнопка вправо
  const sliderRow = useRef(null) //блок с карточками
  let slideLeft = 0; //хранит состояние CSS свойста left

  const changeLeft = () => { //функция меняет положение блока
    sliderRow.current.style.left = `${slideLeft}px`;
  }
  const removeEvent = () => { //убирает слушатели с кнопок
    btnR.current.removeEventListener('click', clickRight);
    btnL.current.removeEventListener('click', clickLeft);
  }
  const addEvent = () => { //ждеть 0,5сек и добавляет слушатели на кнопки
    setTimeout(() => {
      btnR.current.addEventListener('click', clickRight);
      btnL.current.addEventListener('click', clickLeft);
    }, 500)
  }
  useEffect(() => { //срабатывает при перевой отрисовке
    addEvent();
  })
  
  const clickLeft = () => {
    removeEvent()
    if (slideLeft === 0) slideLeft = -2100;
    else slideLeft += 700;
    changeLeft();
    addEvent();
  }
  const clickRight = () => {
    removeEvent()
    if (slideLeft > -2100) slideLeft -= 700;
    else slideLeft = 0;
    changeLeft();
    addEvent();
  }

  return (
    <div className="slider">
      <button className='slider__btn button' ref={btnL}>Left</button>
      <div className="slider__box">
        <div className="slider__row" ref={sliderRow}>
          <img className='slider__card' src={mem1} alt="mem1" />
          <img className='slider__card' src={mem2} alt="mem2" />
          <img className='slider__card' src={mem3} alt="mem3" />
          <img className='slider__card' src={mem4} alt="mem4" />
        </div>
      </div>
      <button className='slider__btn button' ref={btnR}>Right</button>
    </div>
  );
}

export default Slider;
