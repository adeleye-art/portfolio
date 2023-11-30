/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from './assets/logo-icon.png';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';

const Navigation = ({ handleLinkedInClick, handleGitClick }) => {
  const [menu, setMenu] = useState(false);
  const [iconMenu, setIconMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const toggleIcon = () => setIconMenu(!iconMenu);

  const slideAnimation = useSpring({
    opacity: menu ? 1 : 0,
    display: menu ? 'block' : 'none',
    from: { width: '0px', opacity: 0 },
    config: { duration: 500 },
  });

  const iconAnimation = useSpring({
    opacity: iconMenu ? 1 : 0,
    display: iconMenu ? 'block' : 'none',
    from: { opacity: 0 },
  });

  return (
    <>
      <div className="side-navbar-items">
        <div className="nav-wrapper">
          <div className="side-navbar">
            <div className="side-nav-menu">
              <a className="smooth-menu">
                <img className="logo" src={logo} alt="logo" />
              </a>
            </div>
            <CIcon className="nav-toggle" onClick={toggleMenu} icon={icon.cilApps} size="lg" />

            <div className="author-social social">
              <FontAwesomeIcon
                icon={faCirclePlus}
                beat
                className="plus"
                onClick={toggleIcon}
                size="2xl"
                style={{ "--fa-primary-color": "#4bd510", "--fa-secondary-color": "#5a734e" }}
              />
              <animated.div className="social-icons" style={{ ...iconAnimation }}>
                <ul className="icons">
                  <li>
                    <FontAwesomeIcon className="social-icons-list" onClick={handleLinkedInClick} icon={faLinkedin} />
                  </li>
                  <li>
                    <FontAwesomeIcon className="social-icons-list" onClick={handleGitClick} icon={faGithub} style={{ marginBottom: "-2rem" }} />
                  </li>
                </ul>
              </animated.div>
            </div>
          </div>
        </div>

        <div className="container">
          <animated.div className="nav-side" style={{ ...slideAnimation, width: 'unset' }}>
            <div className="nav-items simple-menu">
              <div className="nav-toggle" style={{ background: 'var(--color-primary)', lineHeight: '45px' }}>
                <button type="button" className="btn-close bit" onClick={toggleMenu} aria-label="Close"></button>
              </div>
              {['home', 'services', 'about', 'contact'].map((item) => (
                <div className="nav-item" key={item}>
                  <a href={`#${item}`} className="smooth-menu" style={{ top: 'unset' }}>
                    {item.toUpperCase()}
                  </a>
                  <div className="nav-item-wrapper"></div>
                </div>
              ))}
            </div>
          </animated.div>
        </div>
      </div>

      <div className="menu-toggle">
        <div className="hambugger">
          <button onClick={toggleMenu} style={{ background: 'transparent' }}>
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </button>
        </div>
        <animated.div className="mobile-nav" style={{ ...slideAnimation, width: 'unset' }}>
          <div className="mobile-nav-item">
            <div className="nav-mobile-toggle" style={{ background: 'var(--color-primary)' }}>
              <button type="button" className="btn-close bit" onClick={toggleMenu} aria-label="Close"></button>
            </div>
            {['home', 'services', 'about', 'contact'].map((item) => (
              <div className="nav-item" key={item}>
                <a href={`#${item}`} className="smooth-menu" style={{ top: 'unset' }}>
                  {item.toUpperCase()}
                </a>
              </div>
            ))}
            <animated.div className="social-icons">
              <ul className="icons">
                <li>
                  <FontAwesomeIcon className="social-icons-list" onClick={handleLinkedInClick} icon={faLinkedin} />
                </li>
                <li>
                  <FontAwesomeIcon className="social-icons-list" onClick={handleGitClick} icon={faGithub} style={{ marginBottom: "-2rem" }} />
                </li>
              </ul>
            </animated.div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Navigation;
