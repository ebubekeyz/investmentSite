import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/about.jpg';
import Title2 from '../components/Title2';
import img2 from '../assets/cert.png';
import Wrapper from '../assets/wrappers/AboutPage';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Know from '../components/Know';
import AboutGallery from '../components/AboutGallery';

const About = () => {
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="About fxrealtrade.co"
          id={nanoid()}
          quote="Know more about what we do"
          image={img}
        />

        <Title2
          title="fxrealtrade.co is a registered broker-dealer specializing in private securities."
          text="Collaboration with us is a high-tech process of integrating each client into fxidealtrade.co's unique investor community to strengthen the financial stability of each of them and to obtain a stable profit without risk of losing capital. We are not just a trading company. fxidealtrade.co is a tool that allows everyone to develop potential, making investments based on our technologies.

We offer our partners attractive terms of collaboration. The right to use the company's brand, a well-established algorithm for conducting business, comprehensive support from company specialists. Attractive conditions for investing in the fastest-growing company will help you to invite potential clients for cooperation easily.

Our goal is to provide all parties with the information they need, allowing a smooth progression in our transactions from the pre-marketing phase to the close. We make it easy for you to focus on deals while we run the compliance functions."
        />

        <aside>
          <img src={img2} alt="certificate" className="cert" />
          <article className="facts">
            <h3>FAST FACTS</h3>

            <ul className="list">
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                Broker-dealer firm in business since 2019.<span></span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  {' '}
                  Supervised over 1000 successful transactions in private deals
                  ranging from $1 million to over $100 million.
                </span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  {' '}
                  Specialize in capital raises, M&A opportunities and secondary
                  sales of private stock.
                </span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>Registered in 12 states and Territories</span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  Headquartered in Massachusetts, with registered
                  representatives in some countries
                </span>
              </li>
            </ul>
          </article>
        </aside>

        <Title2
          title="Delivering Results"
          text="We are one of the world’s leading private multi-asset alternative investment firms."
        />

        <aside>
          <article>
            <div className="others">
              <h2>99%</h2>
              <p>A totally new way to grow your Investment</p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>

            <div className="others">
              <h2>Increased</h2>
              <p>Award-winning Capital Investment platform</p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>

            <div className="others">
              <h2>Improved</h2>
              <p>We are adding extra value for your Investment</p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>
          </article>

          <article>
            <p>
              At fxidealtrade.co, we pride ourselves on asking questions,
              planning and creating something out of nothing. We are
              entrepreneurs, inventors, scientists, and engineers shaping the
              future of finance in a collaborative, stimulating environment.
            </p>

            <div>
              <div className="facts">
                <h3>The fxrealtrade.co platform</h3>
                <ul className="list">
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    Built by brokers for brokers<span></span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span> Independent contractor model</span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      Proprietary software supports many private placement deal
                      types
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      Chaperone service enables foreign placement agents to show
                      mandates to US institutional investors
                    </span>
                  </li>
                </ul>
              </div>

              <div className="facts">
                <h3>fxrealtrade.co Transactions Since 2019</h3>
                <ul className="list">
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    Over $1 Billion in transaction value<span></span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      More than 800 domestic private placement transactions
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      Over 61,000,000 euros and 39,000,000 pounds in transaction
                      value
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>Over $35M commissions generated by reps</span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      More than 900 institutional or accredited investors served
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </aside>

        <Title2 title="WHY CHOOSE fxirealtrade.co" text="Lets Get Started." />

        <AboutGallery />

        <Know />
      </div>
    </Wrapper>
  );
};
export default About;
