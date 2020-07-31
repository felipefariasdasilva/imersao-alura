import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './menu.css';
import Logo from '../../assets/img/logo.png';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="myFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
