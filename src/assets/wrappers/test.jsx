import styled from 'styled-components';

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
  .cont {
    background: var(--primary-700);
    text-align: center;
    color: white;
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 2rem 1rem;
    margin-bottom: 4rem;
  }

  .cont p {
    color: white;
    margin-bottom: 1rem;
  }
  .others h2 {
    color: red;
    font-weight: 700;
  }
  .cont .btn:hover {
    background: black;
  }
  .others p {
    width: 25rem;
  }
  aside {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .cert {
    width: 25rem;
    margin-bottom: 1rem;
  }
  .facts h3 {
    color: red;
    font-weight: bold;
    margin-top: 2rem;
  }

  .list li {
    line-height: 1.5;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 30px 1fr;
  }
  .about-gal {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    margin-bottom: 4rem;
  }

  .abt-img {
    transition: 1s ease-in-out all;
    height: 100%;
  }
  .abt-img:hover {
    height: 10rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .gal {
    height: 12rem;
  }
  .about-gal article h4 {
    color: var(--primary-500);
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
  .about-gal article img {
    border-radius: 0.6rem;
    transition: var(--transition);
  }

  @media screen and (min-width: 800px) {
    aside {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .about-gal {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
