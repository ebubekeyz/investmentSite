import styled from 'styled-components';

const Wrapper = styled.div`
  .coins {
    background: white;
    width: 100vw;
  }
  .coins-inner {
    animation: move 30s linear infinite;
    display: flex;
    place-items: center;
    padding: 0.8rem;
    gap: 0.2rem;
    width: 100%;
  }

  .coins-inner h5 {
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--primary-700);
  }
  .coins-inner span {
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--grey-500);
  }
  .coins-inner .last {
    color: red;
    font-size: 0.6rem;
  }
  .coins-main {
    display: flex;
    overflow-x: hidden;
  }

  .coins-inner img {
    width: 1rem;
  }
  @keyframes move {
    to {
      transform: translateX(-2000px);
    }
  }
  @media screen and (min-width: 800px) {
    .coins-inner img {
      width: 2rem;
    }

    .coins-inner h5 {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .coins-inner span {
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--grey-500);
    }
    .coins-inner .last {
      font-size: 0.7rem;
    }
  }
`;

export default Wrapper;
