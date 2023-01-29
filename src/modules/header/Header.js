import './Header.css';
import Menu from '../menu/Menu';
import { AppBar, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to='/'>
          <Typography sx={{ color: 'white', fontSize: 25 }}>MyLogo</Typography>
        </Link>
        <Menu />
        <a href='https://github.com/olegpl1993'>
          <GitHubIcon sx={{ color: 'white', fontSize: 40 }} />
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
