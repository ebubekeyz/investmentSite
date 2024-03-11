import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Investment';
import { FaArrowRight } from 'react-icons/fa';
import Title from '../components/Title';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';

const InvestmentCard = () => {
  return (
    <Wrapper>
      <section>
        <div>
          <Title title="Pricing plans" text="" />
        </div>

        <aside className="invest">
          <article>
            <h3>C-H1 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  50
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>5% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$3,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 24Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H2 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1>
                  3,100
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 12%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>5% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$7,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 2 Days</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H3 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  7,100
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>18% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$20,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 72Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H4 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1>
                  20,500
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>24% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$40,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 96Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>
        </aside>
      </section>

      <section>
        <div>
          <Title title="Partnership Plans (Apex Investors Grade)" text="" />
        </div>

        <aside className="invest">
          <article>
            <h3>C-H STAKE1 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  41,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>7% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$90,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H STAKE2 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  91,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>9.5% ROI AFTER 15HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$200,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H STAKE3 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  201,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>10% ROI AFTER 12 HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$500,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>

          <article>
            <h3>C-H STAKE4 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>$</span>
                <h1 className="change-color">
                  501,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>25% ROI AFTER 24HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>$5,000,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <Link to="/dashboard" className="btn">
              INVEST NOW
            </Link>
          </article>
        </aside>
      </section>
    </Wrapper>
  );
};
export default InvestmentCard;
