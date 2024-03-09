import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Investment';
import { FaArrowRight } from 'react-icons/fa';
import Title from '../components/Title';

const InvestmentCard = () => {
  return (
    <Wrapper>
      <div>
        <Title
          title="CHOOSE A PLAN THAT FITS YOU"
          text="DESIGNED FOR A WIDE RANGE OF NEEDS"
        />

        <aside style={{ width: '90vw', maxWidth: '1170px', margin: '0 auto' }}>
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
                <FaArrowRight
                  style={{ marginLeft: '1rem', fontWeight: '700' }}
                />
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
                <FaArrowRight
                  style={{ marginLeft: '1rem', fontWeight: '700' }}
                />
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
                <FaArrowRight
                  style={{ marginLeft: '1rem', fontWeight: '700' }}
                />
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
                <FaArrowRight
                  style={{ marginLeft: '1rem', fontWeight: '700' }}
                />
              </div>
            </article>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};
export default InvestmentCard;
