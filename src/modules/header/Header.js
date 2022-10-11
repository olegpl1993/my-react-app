import './Header.css';
import Menu from '../menu/Menu';

function Header() {
  return (
    <div className='header__row'>
      <div className='header__logo'>MyLogo</div>
      <div className='header__menu'>
        <Menu />
      </div>
      <a href='https://github.com/olegpl1993' className="header__designed">Designed by olegpl1993</a>
    </div>
  );
}

export default Header;
