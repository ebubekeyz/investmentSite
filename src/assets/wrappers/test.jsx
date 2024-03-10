// coinlib.io/api/v1/coin?key=6cb4aca8259d352f&pref=USD&symbol=BTC,ETH,DOGE,TRX,BNB,USDT,LTC,ADA,XRP,DAI.BCH,USDC

// 6cb4aca8259d352f

// https: export default defineConfig({
//   server: {
//     proxy: {
//       '/api': 'https://coinlib.io',
//     },
//   },
//   plugins: [react()],
// });

{
  /* <aside style={{ width: '90vw', maxWidth: '1170px', margin: '0 auto' }}>
  <div
    className="invest"
    style={{
      display: 'grid',
      gridTemplateColumn: '1fr',

      justifyContent: 'center',
      placeItems: 'center',
    }}
  >
    <article
      style={{
        background: 'white',
        padding: '2rem 1rem',
        margin: '1rem 0',
        boxShadow: 'var(--shadow-3)',
        textAlign: 'center',
        width: '16rem',

        gap: '2rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: 'var(--primary-500)',
        }}
      >
        STANDARD
      </h3>
      <span style={{ fontWeight: '600', color: 'var(--primary-500)' }}>
        For Fledglings
      </span>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1.5rem 0',
          color: 'var(--primary-500)',
        }}
      >
        <span
          style={{
            color: 'var(--primary-500)',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          %
        </span>
        <h1 style={{ fontWeight: '700', fontSize: '4.2rem' }}>5</h1>
      </div>

      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Min: $50
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Max: $999
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        24 Hours Return
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Instant Withdrawal
      </p>
      <p
        style={{
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
        }}
      >
        24/7 Support
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          background: 'var(--primary-500)',
          borderRadius: '2rem',
          color: 'white',
          width: '10rem',
          margin: '0 auto',
        }}
        className="selectText"
      >
        <Link
          to="/dashboard"
          style={{
            fontWeight: '700',
            color: 'white',
            padding: '0.8rem 0.5rem',
          }}
        >
          select Plan
        </Link>
        <FaArrowRight style={{ marginLeft: '1rem', fontWeight: '700' }} />
      </div>
    </article>
    <article
      style={{
        background: 'white',
        padding: '2rem 1rem',
        margin: '1rem 0',
        boxShadow: 'var(--shadow-3)',
        textAlign: 'center',
        width: '16rem',

        gap: '2rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: 'var(--primary-500)',
        }}
      >
        PREMIUM
      </h3>
      <span style={{ fontWeight: '600', color: 'var(--primary-500)' }}>
        Ready to grow? This is for you
      </span>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1.5rem 0',
          color: 'var(--primary-500)',
        }}
      >
        <span
          style={{
            color: 'var(--primary-500)',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          %
        </span>
        <h1 style={{ fontWeight: '700', fontSize: '4.2rem' }}>10</h1>
      </div>

      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Min: $1000
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Max: $4999
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        48 hours Return
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Instant Withdrawal
      </p>
      <p
        style={{
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
        }}
      >
        24/7 Support
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          background: 'var(--primary-500)',
          borderRadius: '2rem',
          color: 'white',
          width: '10rem',
          margin: '0 auto',
        }}
        className="selectText"
      >
        <Link
          to="/dashboard"
          style={{
            fontWeight: '700',
            color: 'white',
            padding: '0.8rem 0.5rem',
          }}
        >
          select Plan
        </Link>
        <FaArrowRight style={{ marginLeft: '1rem', fontWeight: '700' }} />
      </div>
    </article>
    <article
      style={{
        background: 'white',
        padding: '2rem 1rem',
        margin: '1rem 0',
        boxShadow: 'var(--shadow-3)',
        textAlign: 'center',
        width: '16rem',

        gap: '2rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: 'var(--primary-500)',
        }}
      >
        UTILITY
      </h3>
      <span style={{ fontWeight: '600', color: 'var(--primary-500)' }}>
        Go big with our utility plan
      </span>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1.5rem 0',
          color: 'var(--primary-500)',
        }}
      >
        <span
          style={{
            color: 'var(--primary-500)',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          %
        </span>
        <h1 style={{ fontWeight: '700', fontSize: '4.2rem' }}>30</h1>
      </div>

      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Min: $5000
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Max: $9999
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        72 hours Return
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Instant Withdrawal
      </p>
      <p
        style={{
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
        }}
      >
        24/7 Support
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          background: 'var(--primary-500)',
          borderRadius: '2rem',
          color: 'white',
          width: '10rem',
          margin: '0 auto',
        }}
        className="selectText"
      >
        <Link
          to="/dashboard"
          style={{
            fontWeight: '700',
            color: 'white',
            padding: '0.8rem 0.5rem',
          }}
        >
          select Plan
        </Link>
        <FaArrowRight style={{ marginLeft: '1rem', fontWeight: '700' }} />
      </div>
    </article>
    <article
      style={{
        background: 'white',
        padding: '2rem 1rem',
        margin: '1rem 0',
        boxShadow: 'var(--shadow-3)',
        textAlign: 'center',
        width: '16rem',

        gap: '2rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: 'var(--primary-500)',
        }}
      >
        PEAK
      </h3>
      <span style={{ fontWeight: '600', color: 'var(--primary-500)' }}>
        Get VIP treatment with this plan
      </span>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1.5rem 0',
          color: 'var(--primary-500)',
        }}
      >
        <span
          style={{
            color: 'var(--primary-500)',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          %
        </span>
        <h1 style={{ fontWeight: '700', fontSize: '4.2rem' }}>60</h1>
      </div>

      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Min: $10000
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Max: $50000
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Weekly Return
      </p>
      <p
        style={{
          marginBottom: '0.5rem',
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}
      >
        Instant Withdrawal
      </p>
      <p
        style={{
          color: 'rgb(117, 78, 51)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
        }}
      >
        24/7 Support
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          background: 'var(--primary-500)',
          borderRadius: '2rem',
          color: 'white',
          width: '10rem',
          margin: '0 auto',
        }}
        className="selectText"
      >
        <Link
          to="/dashboard"
          style={{
            fontWeight: '700',
            color: 'white',
            padding: '0.8rem 0.5rem',
          }}
        >
          select Plan
        </Link>
        <FaArrowRight style={{ marginLeft: '1rem', fontWeight: '700' }} />
      </div>
    </article>
  </div>
</aside>; */
}

import styled from 'styled-components';

const Wrapper = styled.div`
  .invest {
    text-align: center;
    width: 90vw;
  }

  article {
    background: white;
    box-shadow: var(--shadow-3);
    margin: 1rem auto;
    width: 55vw;
    padding: 3rem 0;
  }

  .percent {
    display: grid;
    grid-template-columns: 20px 1fr 1fr;
    align-content: center;
    font-weight: 700;
  }
  .split {
    display: flex;
    justify-content: space-between;
    width: 12rem;
  }
  .check-inner {
    margin-left: 2rem;
  }
  .check-main {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 1rem 0;
    justify-content: center;
  }
  article h3 {
    margin: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }
  .percent-main {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 1rem;
  }

  .percent-inner {
    color: var(--grey-400);
    font-weight: 700;
  }
  .badge {
    font-size: 4rem;
    color: var(--grey-500);
  }

  .percent span {
    font-size: 1.5rem;
    align-items: center;
  }
  @media screen and (min-width: 800px) {
    .percent {
      display: grid;
      grid-template-columns: 15% 20% 70%;
      align-content: center;
      font-weight: 700;
    }
    .invest {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
    }
    article {
      margin: 1rem auto;
      width: 55vw;
      padding: 3rem 0;
    }
  }
`;

export default Wrapper;
