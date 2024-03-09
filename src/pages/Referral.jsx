import Hero2 from '../components/Hero2';
import img from '../assets/referral.jpg';
import { nanoid } from 'nanoid';
import AboutGallery from '../components/AboutGallery';
import Title2 from '../components/Title2';
import ref from '../assets/referral2.jpg';
import { FaRegEye } from 'react-icons/fa6';
import { RiGpsLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/Referral';

const Referral = () => {
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="Affliate Program"
          id={nanoid()}
          quote="Success isn’t really that difficult. There is a significant portion of the population, that actually want and need success"
          image={img}
        />

        <div className="ref-text">
          <article>
            <h3>What You'll Get as Affiliate Partner</h3>
            <p>
              Earn Unlimited Commissions with fxidealtrade.co Affiliate
              Program.Our partner program can increase your income by receiving
              percentage from the purchases made by your referrals into.
            </p>
          </article>

          <article>
            <div className="ref-num">
              <span>01</span>
              <div className="ref-num-inner">
                <h4>Join Our Program</h4>
                <p>
                  Once you sign up, you’ll get a personalized link to send to
                  your friends.Click Join Now below and start EARNING in just a
                  few clicks.
                </p>
              </div>
            </div>

            <div className="ref-num">
              <span>02</span>
              <div className="ref-num-inner">
                <h4>Promote</h4>
                <p>
                  Share your referral link wherever, whenever (don’t be
                  selfish).Monetize your traffic with a Tracking Link.
                </p>
              </div>
            </div>

            <div className="ref-num">
              <span>03</span>
              <div className="ref-num-inner">
                <h4>Earn</h4>
                <p>
                  Get up to 7% commission. Earn from ALL products with your 30
                  day cookie, not just those you advertise.
                </p>
              </div>
            </div>
          </article>
        </div>

        <Title2
          title="Diversity, along with innovative collaboration"
          text="We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their Investment."
        />

        <div className="information">
          <article className="info-inner1">
            <div className="ref-inner">
              <FaRegEye style={{ fontSize: '2rem' }} />
              <h4
                style={{
                  fontWeight: '700',
                  fontSize: '2rem',
                }}
              >
                Our Vision
              </h4>
            </div>

            <p style={{ color: 'white' }}>
              Investors are constrained by high admin costs, unnecessary
              intermediaries, slow execution and limited transparency. At
              fxidealtrade.co, we believe that blockchain technology will
              radically transform this industry to the benefit of investors
              across the globe.
            </p>
          </article>

          <article className="info-inner2">
            <div className="ref-inner">
              <RiGpsLine style={{ fontWeight: '700', fontSize: '2rem' }} />
              <h4 style={{ fontWeight: '700' }}>Our Mission</h4>
            </div>

            <p style={{ color: 'white' }}>
              We believe that the future of finance looks very different to how
              it looks today and we offer qualifying investors the opportunity
              in the companies and products that are building the future of
              finance.
            </p>
          </article>
        </div>

        <div>
          <img
            src={ref}
            alt="referral banner"
            style={{ height: '20rem', marginTop: '2rem' }}
          />
        </div>

        <Title2
          title="Three reasons why you should choose our service"
          text=""
        />

        <AboutGallery />
      </div>
    </Wrapper>
  );
};
export default Referral;
