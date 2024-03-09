import styled from 'styled-components';

const Wrapper = styled.div`
  .about-img {
    position: relative;
    width: 80%;
    transition: var(--transition);
    margin: 0 auto;
    margin-top: 4rem;
  }

  .about-img::before {
    content: '';
    background: var(--primary-500);
    position: absolute;
    top: -10%;
    left: 0;
    height: 100%;
    width: 80%;
    z-index: -1;
    transition: var(--transition);
  }
  .about-img::after {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: -5%;
    left: 5%;
    height: 100%;
    width: 90%;
    z-index: -1;
    transition: var(--transition);
  }

  .about-img:hover::before,
  .about-img:hover::after {
    top: 0;
    left: 0;
  }

  .about-photo {
    transform: translateX(10%);

    transition: var(--transition);
  }
  .about-photo:hover {
    transform: translateX(0);
  }

  .about-text h3 {
    text-align: center;
    color: var(--primary-500);
    font-size: 1rem;
    font-weight: 700;
  }

  .about-title h3 {
    margin-top: 20px;
  }
  @media screen and (min-width: 992px) {
    .about-img {
      width: 40%;
    }
    .about-center {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
    }
    .about-title h3 {
      margin-top: 20px;
    }
  }
`;

export default Wrapper;
