import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  padding-bottom: 4rem;
  .dashboard {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .acc-bal {
    background: linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
  .circle {
    display: flex;
    margin-bottom: 1rem;
  }
  .circle #circle-one,
  #circ-two {
    background: var(--grey-100);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 5rem;

    color: white;
  }
  #circ-two {
    opacity: 0.4;
    margin-left: -0.5rem;
  }

  article p,
  h4 {
    color: white;
  }
  article h4 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
  }
`;

export default Wrapper;
