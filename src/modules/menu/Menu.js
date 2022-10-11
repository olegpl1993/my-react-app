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
          <Link to='/slider'>
            Mem slider
          </Link>
        </li>
        <li>
          <Link to='/todo'>
            Todo list
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
