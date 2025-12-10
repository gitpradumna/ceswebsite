import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo2 from '../../assets/ces-logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isTeamPage = location.pathname === '/team';

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      const handleScroll = () => {
        setSticky(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img src={logo2} alt="CES Logo" className={`logo${sticky || isTeamPage ? ' logo-small' : ''}`} />
      </RouterLink>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <RouterLink to="/">
            <h3>HOME</h3>
          </RouterLink>
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink to='program' smooth={true} offset={-260} duration={500}>
              <h3>EVENTS</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <h3>EVENTS</h3>
            </RouterLink>
          )}
        </li>
        <li>
          <RouterLink to="/gallery">
            <h3>GALLERY</h3>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog">
            <h3>BLOG</h3>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/team">
            <h3>TEAM</h3>
          </RouterLink>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
