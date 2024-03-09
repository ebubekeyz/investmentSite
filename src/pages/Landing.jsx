import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InvestmentCard from '../components/InvestmentCard';
import Submenu from '../components/Submenu';
import Wrapper from '../assets/wrappers/Landing';
import Wrapper2 from '../assets/wrappers/AboutPage';
import Wrapper3 from '../assets/wrappers/Landing2';
import Wrapper4 from '../assets/wrappers/Card';
import { FaArrowRight } from 'react-icons/fa';
import image1 from '../assets/mission.jfif';
import image2 from '../assets/value.jpg';
import image3 from '../assets/aim.jpg';
import Title2 from '../components/Title2';
import Title from '../components/Title';
import { BiBookBookmark } from 'react-icons/bi';
import { IoIosCloudOutline } from 'react-icons/io';
import { PiSpeakerSimpleNone } from 'react-icons/pi';
import { BsHouses } from 'react-icons/bs';
import { CiBoxes } from 'react-icons/ci';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { CiMusicNote1 } from 'react-icons/ci';
import { SlEarphones } from 'react-icons/sl';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { GoBriefcase } from 'react-icons/go';
import { FaCarAlt } from 'react-icons/fa';
import { IoIosFlash } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbDeviceIpadSearch } from 'react-icons/tb';
import Ceo from '../components/Ceo';

const API = import.meta.env.VITE_COIN_API;

const coinsUrl = `https://coinlib.io/api/v1/coinlist?key=${API}f&pref=BTC&page=1&order=volume_desc`;

const Landing = () => {
  return (
    <>
      {/* <Submenu /> */}
      <Hero />

      <Wrapper>
        <div className="landing">
          <article>
            <h2>Investment With us is Easy</h2>
          </article>
          <article className="land-inner">
            <h4>
              The new frontier to FINANCE is here already- Trest-Holding.com
            </h4>
          </article>

          <article className="know-arrow">
            <Link to="/about" style={{ fontWeight: '700', color: 'red' }}>
              Know More About{' '}
            </Link>

            <FaArrowRight className="landing-btn" />
          </article>
        </div>

        <div className="about-gal">
          <article>
            <img src={image1} alt="abt1" className="abt-img2" />
            <h4 style={{ marginBottom: '0.8rem' }}>Mission and vision</h4>
            <p>
              We believe that the future belongs to those who prepare now for
              it. We offer qualifying investors the opportunity to invest in the
              companies and products that are building the future humanity.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/investment"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                START INVESTING
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>
          <article>
            <img src={image2} alt="abt2" className="abt-img" />
            <h4 style={{ marginBottom: '0.8rem' }}>Our Value</h4>
            <p>
              Trest-Holding.com is a distinctive investment platform offering
              investors a wide range of investment opportunities. We emphasize
              on understanding our client’s goals so we can help them achieve.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/register"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                JOIN US NOW
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>
          <article>
            <img src={image3} alt="abt3" className="abt-img" />
            <h4 style={{ marginBottom: '0.8rem' }}>Our Aim</h4>
            <p>
              We Genuinely Want Our Clients to Succeed. Once you open an account
              with us, we will hold your capital in trust and grow it masterly
              for you.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/register"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                JOIN US NOW
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>

          <article>
            <p
              style={{
                borderBottom: '4px solid red',
                width: '100%',
                marginBottom: '2rem',
              }}
            ></p>

            <h3
              style={{
                color: 'red',
                fontWeight: '700',
                fontSize: '1.4rem',
                letterSpacing: '0',
                marginBottom: '1rem',
              }}
            >
              Quality Circle Program
            </h3>
            <p>
              A unique of its kind initiative to impart financial awareness
              among people and to tell them about basic do’s and dont’s of
              financial management.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/investment"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                START INVESTING
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>

            <div
              style={{
                background: 'var(--primary-500',
                padding: '2rem',
                color: 'white',
                marginTop: '2rem',
                borderRadius: '0.8rem',
              }}
            >
              <h3
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                }}
              >
                Careers with us
              </h3>
              <p style={{ color: 'white' }}>
                There’s always room for intelligent people who are excited about
                the Capital world and are continually looking forward to seeing
                what’s next.
              </p>
            </div>
          </article>
        </div>

        <Title title="A WIDE RANGE OF OPTIONS" text="" />

        <section className="box-container">
          <article className="bond">
            <div className="box-inner">
              <BiBookBookmark
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>BONDS</h3>
            </div>
          </article>

          <article>
            <div className="box-inner">
              <RiMoneyDollarBoxLine
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                CRYPTOCURRENCY
              </h3>
            </div>
          </article>

          <article>
            <div className="box-inner">
              <IoIosCloudOutline
                style={{
                  marginRight: '2rem',
                  color: 'red',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>STOCKS</h3>
            </div>
          </article>

          <article>
            <div className="box-inner">
              <PiSpeakerSimpleNone
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>ETFS</h3>
            </div>
          </article>

          <article>
            <div className="box-inner">
              <CiBoxes
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>FOREX</h3>
            </div>
          </article>

          <article className="estate">
            <div className="box-inner">
              <BsHouses
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                REAL ESTATE
              </h3>
            </div>
          </article>
        </section>
      </Wrapper>

      <section
        style={{
          background: 'var(--primary-500)',
          padding: '6rem',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2
          style={{
            fontWeight: 'bold',
            maxWidth: '60rem',
            margin: '2rem auto',
            fontSize: '2.4rem',
          }}
        >
          We Focus On The Best Performing Industries And Assets
        </h2>
        <p style={{ color: 'white' }}>
          Well poised and covered to get you where you want to be economically.
        </p>
      </section>

      <Wrapper4>
        <section className="card-main">
          <article className="card">
            <div>
              <FaCarAlt
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Automotive
              </h3>
            </div>

            <div>
              <SlEarphones
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Community Service
              </h3>
            </div>

            <div>
              <PiShoppingCartSimpleLight
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Retail</h3>
            </div>

            <div>
              <BiBookBookmark
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Education
              </h3>
            </div>

            <div>
              <RiMoneyDollarBoxLine
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Financial Service
              </h3>
            </div>

            <div>
              <TbDeviceIpadSearch
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Publishing
              </h3>
            </div>
          </article>

          <article className="card">
            <div>
              <MdOutlineSupportAgent
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Support</h3>
            </div>

            <div>
              <GoBriefcase
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Travel</h3>
            </div>

            <div>
              <CiMusicNote1
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Media and Entertainment
              </h3>
            </div>

            <div>
              <CiDeliveryTruck
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Logistics and Distribution
              </h3>
            </div>

            <div>
              <IoIosFlash
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Mining</h3>
            </div>

            <div>
              <FaRegHeart
                style={{
                  marginRight: '2rem',
                  color: 'var(--grey-400)',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Healthcare
              </h3>
            </div>
          </article>
        </section>
      </Wrapper4>

      <Title2
        title="Invest in the future of finance"
        text="Invest in the disruption of a multi-trillion dollar industry the smart way."
      />

      <Wrapper>
        <section className="box-container">
          <article className="bond">
            <div className="box-inner">
              <IoIosCloudOutline
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                GLOBAL INVESTOR REACH
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              We have an active, growing community of over 15,000 investors from
              more than 150 countries. Blockchain knows no borders.
            </p>
          </article>

          <article>
            <div className="box-inner">
              <BiBookBookmark
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                INVEST SECURELY
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              We use bank-grade security procedures including secure socket
              layers, two factor authentication and are registered with our
              Monetary Authority to run a securities business and transfer funds
              in secure, dedicated client money accounts.
            </p>
          </article>

          <article>
            <div className="box-inner">
              <PiSpeakerSimpleNone
                style={{
                  marginRight: '2rem',
                  color: 'red',
                  fontSize: '3rem',
                }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                INVEST WITH PROTECTION
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              Receive professional grade protections through our unique pooled
              investment structure so your investments can grow in a
              tax-efficient way.
            </p>
          </article>

          <article>
            <div className="box-inner">
              <CiBoxes
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                INVEST WITH SPECIALISTS
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              We are the largest global online investment community of
              professional investors all investing in financial innovation and
              technology.
            </p>
          </article>

          <article>
            <div className="box-inner">
              <RiMoneyDollarBoxLine
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                ONGOING INVESTOR RELATIONS
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              Investors and businesses can easily keep-in-touch online
              throughout the investment lifecycle and store all documentation in
              one place.
            </p>
          </article>

          <article className="estate">
            <div className="box-inner">
              <BsHouses
                style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                NATIVELY DIGITAL
              </h3>
            </div>
            <p className="bond-text" style={{ marginTop: '1.2rem' }}>
              We are the digital alternative to traditional asset management -
              borderless, hyper-efficient and usable from any smartphone. No
              paperwork required.
            </p>
          </article>
        </section>
      </Wrapper>

      <InvestmentCard />

      <Ceo />

      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '2.5rem',
            color: 'var(--primary-500',
            marginTop: '3rem',
            marginBottom: '2rem',
          }}
        >
          HERE FOR YOU
        </h2>
        <h3
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          Explore More
        </h3>
      </section>

      <Wrapper3>
        <div className="about-gal">
          <article>
            <img src={image1} alt="abt1" className="abt-img" />
            <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>Legal</h4>
            <p>
              We are A reputable broker establishemt. We have been around for
              long and about us our clients from all over the world have nothing
              but positive things to say. We offer only a market-leading,
              industry-standard brokerage service.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/about"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                Learn more
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>
          <article>
            <img src={image2} alt="abt2" className="abt-img" />
            <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>
              Operations
            </h4>
            <p>
              We Are Well-regulated and Safe To Trade With. Tested and trusted
              by thousands. Forex Birds easily circumvents this concern as we
              are registered with and duly regulated by the UK's Securities and
              Investments Commission (ASIC).
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/about"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                Learn more
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>
          <article>
            <img src={image3} alt="abt3" className="abt-img" />
            <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>
              Finance
            </h4>
            <p>
              We have raised millions in venture capital funding, to secure
              against markets harzads, funds are fully insured.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',

                borderRadius: '2rem',
              }}
              className="selectText"
            >
              <Link
                to="/about"
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                  padding: '0.8rem 0rem',
                }}
              >
                Learn more
              </Link>
              <FaArrowRight
                style={{
                  marginLeft: '1rem',
                  fontWeight: '700',
                  color: 'var(--primary-500)',
                }}
              />
            </div>
          </article>
        </div>
      </Wrapper3>
    </>
  );
};
export default Landing;
