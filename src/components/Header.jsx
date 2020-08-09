import React from 'react';

import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo.png'
import userIcon from '../assets/images/user-icon.png'
const narutoLink = "https://naruto.fandom.com/es/wiki/Naruto_(Anime)";
const shippudenLink = "https://naruto.fandom.com/es/wiki/Naruto:_Shipp%C5%ABden";
const borutoLink = "https://naruto.fandom.com/es/wiki/Boruto:_Naruto_Next_Generations_(Anime)";
const narutoWikiLink = "https://naruto.fandom.com/es/wiki/Naruto_Wiki";


const Header = () => (
<header className="header">
    <a title="Ver Más" href={narutoWikiLink} target="_blank"><img className="header__img" src={logo} alt="Naruto Wiki"/></a>
    <div className="header__menu">
      <div className="header__menu--profile">
      <img src={userIcon} alt=""/>
        <p>Naruto Wiki</p>
      </div>
      <ul>
        <li><a href={narutoLink} target="_blank">Naruto</a></li>
        <li><a href={shippudenLink} target="_blank">Shippūden</a></li>
        <li><a href={borutoLink} target="_blank">Boruto</a></li>
      </ul>
    </div>
  </header>
    
);

export default Header;