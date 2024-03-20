import styled from 'styled-components';

const Wrapper = styled.div`
  .sidebar {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .sidebar {
      display: block;
      background: rgb(31, 29, 29);
      height: 100%;
    }
    .tog-text {
      transition: var(--transition);
    }
    .tog-text:hover {
      color: yellow;
    }
    .tog,
    .home {
      display: flex;
      align-self: center;
    }
    .home {
      padding: 1rem 0;
    }
    #dash {
      background: linear-gradient(
        to right,
        rgba(69, 179, 54, 0.7),
        rgba(29, 201, 143, 0.7)
      );
      padding: 0rem 1rem;
      margin-top: 1rem;
      width: 100%;
    }
    #dash2 {
      padding: 0rem 1rem;
      width: 100%;
      padding-bottom: 1rem;
      cursor: pointer;
    }
    .ico {
      color: white;
      font-size: 1.2rem;
      margin-left: 2rem;

      cursor: pointer;
    }
    .icon {
      color: white;
      font-size: 1rem;
    }
    .tog-text {
      color: white;
      margin-left: 1rem;
      margin-right: 4rem;
      cursor: pointer;
    }
    .tog-text2 {
    }
  }
`;
export default Wrapper;
