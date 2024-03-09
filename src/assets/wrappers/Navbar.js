import styled from 'styled-components';

const Wrapper = styled.nav`
  .nav {
    align-items: center;
    background: transparent;
    position: relative;
    z-index: 1;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.2rem 0;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    color: white;
    background: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background: var(--clr-grey-5);
  }
  .nav-links {
    display: none;
  }
  .toggle-btn {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .btn {
      cursor: pointer;
      color: var(--white);
      background: var(--primary-500);
      border: transparent;
      border-radius: var(--borderRadius);
      letter-spacing: var(--letterSpacing);
      padding: 0.375rem 0.75rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-transform: capitalize;
    }
    .btn:hover {
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: flex;
      justify-self: center;
      text-align: center;
      height: 100%;
      font-size: 1.1rem;
      text-transform: capitalize;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .nav-links li {
      height: 100%;
      padding-bottom: 0.5rem;
    }

    .link-btn {
      margin: 0 0.5rem;
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: black;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
    .nav-links li:hover {
      border-bottom: 2px solid var(--primary-500);
      padding-bottom: 0.5rem;
    }
    .mark:hover {
      border-bottom: none;
    }
    .nav-links li:hover .link-btn {
    }
  }
  .submenu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
  }
  .submenu::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .submenu.show {
    display: block;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 10rem;
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
  }
  .submenu-center i {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Wrapper;
