import styled from 'styled-components';

const Wrapper = styled.nav`
  nav {
    background: rgb(36, 34, 34);
    box-shadow: var(--shadow-1);
  }

  .logo {
    height: 45px;
  }
  .icon2 {
    font-size: 1.5rem;
    display: none;
  }
  .icon {
    color: white;
    cursor: pointer;
  }

  .toggle2 {
    background: black;
    padding: 1.7rem;
    display: none;
    border-radius: 0.5rem;
    margin: 0.2rem auto;
    position: absolute;
    right: 1rem;
  }
  .toggle2 li {
    color: white;
    padding: 0.4rem 0;
    font-size: 1rem;
    cursor: pointer;
  }

  .nav-info-inner {
    display: flex;
    align-self: center;
    justify-content: space-between;
    place-items: center;
  }
  .nav-info-inner {
    border: 1px solid var(--grey-600);
    padding: 0.3rem 0.3rem;
    border-radius: 0.5rem;
  }
  .nav-info-inner p {
    margin: 0 0.3rem;
    text-transform: capitalize;
    color: white;
  }

  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  @media screen and (min-width: 600px) {
    .toggle2 {
      position: absolute;
      right: 1rem;
    }
  }

  @media screen and (min-width: 800px) {
    .toggle2 {
      position: absolute;
      right: 7rem;
    }
    .icon2 {
      display: block;
    }
    .nav-info-inner {
      border: none;
    }

    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
      gap: 1rem;
    }
    .links a {
      padding: 0;
      font-weight: 400;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
      gap: 0.5rem;
    }
    .social-icons a {
      color: var(--primary-500);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--primary-300);
    }
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    font-style: italic;
  }
`;

export default Wrapper;
