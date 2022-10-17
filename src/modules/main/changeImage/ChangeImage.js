import { useState } from 'react';
import './ChangeImage.css';

function ChangeImage() {
  const [imgClassName, setImgClassName] = useState(0)

  const changeImg = () => {
    if (imgClassName >= 0 && imgClassName < 3) setImgClassName(imgClassName + 1);
    else setImgClassName(0);
  }

  return (
    <div className='changeImage'>
      <button className='changeImage__btn button' onClick={changeImg}>Change</button>
      <div className={`changeImage__imgBox memImg${imgClassName}`}></div>
    </div>
  );
}
export default ChangeImage;