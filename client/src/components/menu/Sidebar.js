import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Sidebar = ({ toggleSideBar, navLinks }) => {
  return (
    <Fade top duration={300}>
      <div className='sidebar' onClick={toggleSideBar}>
        <div className='sidebar__icon'>
          <FaTimes />
        </div>
        <div className='sidebar__wrapper'>
          <ul className='sidebar__wrapper__menu'>
            {navLinks.map(link => (
              <LinkScroll
                className='menu-links menu-links--side'
                to={link}
                key={link}
                onClick={toggleSideBar}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                {link}
              </LinkScroll>
            ))}
          </ul>
          <nav className='btn-wrap'>
            <LinkRouter className='btn-wrap__link btn-wrap__link--side' to='/signin'>
              Sign In
            </LinkRouter>
          </nav>
        </div>
      </div>
    </Fade>
  );
};

export default Sidebar;
