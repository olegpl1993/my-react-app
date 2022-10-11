import './Footer.css';
import Menu from '../menu/Menu'

function Footer() {
  return (
    <div className="footer__box">
      <div className="footer__menu">
        <Menu />
      </div>
      <div className="footer__created-date">Created 11.10.2022</div>
    </div>
  );
}

export default Footer;
