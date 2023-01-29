import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/slider'>MemSlider</Link>
        </li>
        <li>
          <Link to='/muiSlider'>MuiSlider</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
