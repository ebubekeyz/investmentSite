import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding-bottom: 6rem;
  }
  .card article:hover {
    transform: scale(1.02);
  }

  .card article {
    transition: var(--transition);
    background: rgb(19, 17, 17);
    padding: 1rem;

    color: white;

    margin-top: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid var(--grey-700);
  }
  .deposit-img {
    height: 11.5em;
    width: 11.5em;
    object-fit: contain;
  }
  .deposit-text {
    margin: 1rem;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 800px) {
    .card {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .form-main {
    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
    border: 1px solid var(--grey-600);
    padding: 2rem 1rem;
    color: white;
    max-width: 30rem;
    margin: 2rem auto;
  }
  .form-main h3 {
    font-weight: 700;
    border-bottom: 1px solid var(--grey-700);
    padding-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .top h4 {
    color: white;
    font-size: 1.2rem;
  }

  .update-btn {
    width: 100%;
    max-width: 50rem;
    margin: 1rem 0;
  }
  .btn-info {
    text-align: center;
  }
  .form-container {
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .input {
    border-radius: 0.4rem;
    width: 100%;
    background: rgb(19, 17, 17);
    border: 1px solid var(--grey-700);
    font-size: 1.2rem;
    padding: 0.4rem;
    color: white;
    margin-top: 0.7rem;
  }

  .close-icon {
    cursor: pointer;
    color: white;
    background: red;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.1rem;
  }
  .back {
    color: var(--grey-400);
  }

  .space {
    margin-right: 0.6rem;
  }

  .top-inner {
    display: flex;
    align-self: center;
  }
  .deposit-form {
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-info {
    display: grid;
    grid-template-columns: 30% 30%;
    justify-content: right;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .top {
    display: flex;
    justify-content: space-between;
    place-items: center;
    align-self: center;
    border-bottom: 1px solid var(--grey-800);
    padding-bottom: 1.2rem;
  }

  .back-icon,
  .back {
    color: white;
  }
  .top-inner {
    cursor: pointer;
  }
  .top2 {
    display: flex;
    justify-content: space-between;
    place-items: center;
    align-self: center;
    border-bottom: 1px solid var(--grey-800);
    padding-top: 2rem;
    width: 90vw;
    margin: 0 auto;
  }
`;

export default Wrapper;
