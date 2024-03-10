import logo from '../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import { navbarData } from '../utils';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleNav = () => {
    setShowLinks(!showLinks);
  };
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  const styleLinks = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <span className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </span>
          <button className="nav-toggle" onClick={toggleNav}>
            <CiMenuFries className="toggle-btn" />
          </button>
        </div>

        <div
          className="links-container"
          ref={linkContainerRef}
          style={styleLinks}
        >
          <ul className="links" ref={linkRef}>
            <li>
              <NavLink to="/" className="link-btn">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="link-btn">
                Who we are
              </NavLink>
            </li>

            <li>
              <NavLink to="/investment" className="link-btn">
                investment
              </NavLink>
            </li>

            <li>
              <NavLink to="/faqs" className="link-btn">
                faqs
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="link-btn">
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="social-icons">
            <span>
              <NavLink
                to="/login"
                className="btn mark link-btn"
                style={{ background: 'var(--primary-500)', color: 'white' }}
              >
                Login
              </NavLink>
            </span>

            <span>
              <Link
                to="/register"
                className="btn mark link-btn"
                style={{
                  background: 'var(--grey-800)',
                  color: 'white',
                }}
              >
                register
              </Link>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
