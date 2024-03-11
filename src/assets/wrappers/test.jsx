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

// import styled from 'styled-components';

// const Wrapper = styled.div`
//   .invest {
//     text-align: center;
//     width: 90vw;
//   }

//   article {
//     background: white;
//     box-shadow: var(--shadow-3);
//     margin: 1rem auto;
//     width: 55vw;
//     padding: 3rem 0;
//   }

//   .percent {
//     display: grid;
//     grid-template-columns: 20px 1fr 1fr;
//     align-content: center;
//     font-weight: 700;
//   }
//   .split {
//     display: flex;
//     justify-content: space-between;
//     width: 12rem;
//   }
//   .check-inner {
//     margin-left: 2rem;
//   }
//   .check-main {
//     display: grid;
//     grid-template-columns: 1fr;
//     place-items: center;
//     margin: 1rem 0;
//     justify-content: center;
//   }
//   article h3 {
//     margin: 1rem;
//     font-weight: 700;
//     font-size: 1.5rem;
//     text-align: center;
//   }
//   .percent-main {
//     display: grid;
//     grid-template-columns: 1fr;
//     place-items: center;
//     margin: 1rem;
//   }

//   .percent-inner {
//     color: var(--grey-400);
//     font-weight: 700;
//   }
//   .badge {
//     font-size: 4rem;
//     color: var(--grey-500);
//   }

//   .percent span {
//     font-size: 1.5rem;
//     align-items: center;
//   }
//   @media screen and (min-width: 800px) {
//     .percent {
//       display: grid;
//       grid-template-columns: 15% 20% 70%;
//       align-content: center;
//       font-weight: 700;
//     }
//     .invest {
//       display: grid;
//       grid-template-columns: 1fr 1fr 1fr 1fr;
//       text-align: center;
//     }
//     article {
//       margin: 1rem auto;
//       width: 55vw;
//       padding: 3rem 0;
//     }
//   }
// `;

// export default Wrapper;

// fa21c2a8-cb90-4809-a996-7a9b0a825678

// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import InvestmentCard from '../components/InvestmentCard';
// import Submenu from '../components/Submenu';
// import Wrapper from '../assets/wrappers/Landing';
// import Wrapper2 from '../assets/wrappers/AboutPage';
// import Wrapper3 from '../assets/wrappers/Landing2';
// import Wrapper4 from '../assets/wrappers/Card';
// import Wrapper5 from '../assets/wrappers/Coins';
// import { FaArrowRight } from 'react-icons/fa';
// import image1 from '../assets/mission.jfif';
// import image2 from '../assets/value.jpg';
// import image3 from '../assets/aim.jpg';
// import Title2 from '../components/Title2';
// import Title from '../components/Title';
// import { BiBookBookmark } from 'react-icons/bi';
// import { IoIosCloudOutline } from 'react-icons/io';
// import { PiSpeakerSimpleNone } from 'react-icons/pi';
// import { BsHouses } from 'react-icons/bs';
// import { CiBoxes } from 'react-icons/ci';
// import { RiMoneyDollarBoxLine } from 'react-icons/ri';
// import { CiMusicNote1 } from 'react-icons/ci';
// import { SlEarphones } from 'react-icons/sl';
// import { PiShoppingCartSimpleLight } from 'react-icons/pi';
// import { MdOutlineSupportAgent } from 'react-icons/md';
// import axios from 'axios';
// import { useLoaderData } from 'react-router-dom';
// import { GoBriefcase } from 'react-icons/go';
// import { FaCarAlt } from 'react-icons/fa';
// import { IoIosFlash } from 'react-icons/io';
// import { FaRegHeart } from 'react-icons/fa';
// import { CiDeliveryTruck } from 'react-icons/ci';
// import { TbDeviceIpadSearch } from 'react-icons/tb';
// import Ceo from '../components/Ceo';
// import btcImg from '../assets/btc.png';
// import { coinFetch } from '../utils';
// import { nanoid } from 'nanoid';
// import ethImg from '../assets/eth.png';
// const API = import.meta.env.VITE_COIN_API;

// // const coinsQuery = () => {
// //   return {
// //     queryKey: ['coins'],
// //     queryFn: async () => {
// //       const response = await axios.get(`${coinsUrl}`);
// //       return { coins: response.data.coins };
// //     },
// //   };
// // };

// // export const loader = (queryClient) => async () => {
// //   await queryClient.ensureQueryData(coinsQuery());
// //   return { coins: response.data.coins  };
// // };

// export const loader = async () => {
//   const response = await coinFetch.get(
//     `/api/v1/coinlist?key=${API}&pref=USD&page=1&order=volume_desc`
//   );

//   return { coins: response.data.coins };
// };

// const Landing = () => {
//   const { coins } = useLoaderData();
//   // const { coins } = useQuery(coinsQuery());
//   // console.log(coins);

//   const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });

//   return (
//     <>
//       {/* <Submenu /> */}
//       <Hero />
//       <Wrapper5>
//         <section className="coins-main">
//           {coins.map((coin) => {
//             const {
//               name: tetherName,
//               price: tetherPrice,
//               symbol: tetherSymbol,
//               delta_24h: tetherDelta_24h,
//               show_symbol: tetherShowSymbol,
//             } = coins[0];
//             const {
//               name: ethName,
//               price: ethPrice,
//               symbol: ethSymbol,
//               delta_24h: ethDelta_24h,
//               show_symbol: ethShowSymbol,
//             } = coins[0];
//             let {
//               name: BtcName,
//               price: BtcPrice,
//               symbol: BtcSymbol,
//               delta_24h: BtcDelta_24h,
//               show_symbol: BtcShowSymbol,
//             } = coins[1];
//             const {
//               name: EthName,
//               price: EthPrice,
//               symbol: EthSymbol,
//               delta_24h: EthDelta_24h,
//               show_symbol: EthShowSymbol,
//             } = coins[2];
//             const num = Number(BtcPrice);
//             console.log(BtcShowSymbol);

//             return (
//               <article key={nanoid()} className="coins">
//                 <div className="coins-inner">
//                   <img src={btcImg} alt="btc-image" />

//                   <h5>{BtcName}</h5>
//                   <span>[{BtcSymbol}]</span>
//                   <span>{formatter.format(Number(BtcPrice).toFixed(2))}</span>
//                   <span
//                     style={{
//                       color: Number(BtcDelta_24h) < 0 ? 'red' : 'green',
//                     }}
//                   >
//                     {BtcDelta_24h}%
//                   </span>
//                 </div>
//               </article>
//             );
//           })}
//         </section>
//       </Wrapper5>

//       <Wrapper>
//         <div className="landing">
//           <article>
//             <h2>Investing with us is straightforward</h2>
//           </article>
//           <article className="land-inner">
//             <h4>The future of finance has arrived – trexholding.com.</h4>
//           </article>

//           <article className="know-arrow">
//             <Link to="/about" style={{ fontWeight: '700', color: 'red' }}>
//               Know More About{' '}
//             </Link>

//             <FaArrowRight className="landing-btn" />
//           </article>
//         </div>

//         <div className="about-gal">
//           <article>
//             <img src={image1} alt="abt1" className="abt-img2" />
//             <h4 style={{ marginBottom: '0.8rem' }}>Mission and vision</h4>
//             <p>
//               We believe that those who prepare for the future now will be its
//               rightful owners. We extend the opportunity to qualified investors
//               to invest in companies and products that are shaping the future of
//               humanity.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/investment"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 START INVESTING
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>
//           <article>
//             <img src={image2} alt="abt2" className="abt-img" />
//             <h4 style={{ marginBottom: '0.8rem' }}>Our Value</h4>
//             <p>
//               Trexholding stands out as a unique investment platform that
//               provides a diverse array of investment opportunities for
//               investors. Our focus is on comprehending our clients' goals to
//               assist them in achieving success.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/register"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 JOIN US NOW
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>
//           <article>
//             <img src={image3} alt="abt3" className="abt-img" />
//             <h4 style={{ marginBottom: '0.8rem' }}>Our Aim</h4>
//             <p>
//               We sincerely desire success for our clients. When you open an
//               account with us, we will prudently manage and grow your capital in
//               trust for you.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/register"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 JOIN US NOW
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>

//           <article>
//             <p
//               style={{
//                 borderBottom: '4px solid red',
//                 width: '100%',
//                 marginBottom: '2rem',
//               }}
//             ></p>

//             <h3
//               style={{
//                 color: 'red',
//                 fontWeight: '700',
//                 fontSize: '1.4rem',
//                 letterSpacing: '0',
//                 marginBottom: '1rem',
//               }}
//             >
//               Quality Circle Program
//             </h3>
//             <p>
//               A one-of-a-kind initiative aimed at spreading financial awareness
//               among people and educating them about the fundamental dos and
//               don'ts of financial management.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/investment"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 START INVESTING
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>

//             <div
//               style={{
//                 background: 'var(--primary-500',
//                 padding: '2rem',
//                 color: 'white',
//                 marginTop: '2rem',
//                 borderRadius: '0.8rem',
//               }}
//             >
//               <h3
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: '1.4rem',
//                   marginBottom: '1rem',
//                 }}
//               >
//                 Careers with us
//               </h3>
//               <p style={{ color: 'white' }}>
//                 There is always space for individuals with intelligence who are
//                 enthusiastic about the world of finance and are consistently
//                 eager to anticipate what comes next.
//               </p>
//             </div>
//           </article>
//         </div>

//         <Title title="A WIDE RANGE OF OPTIONS" text="" />

//         <section className="box-container">
//           <article className="bond">
//             <div className="box-inner">
//               <BiBookBookmark
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>BONDS</h3>
//             </div>
//           </article>

//           <article>
//             <div className="box-inner">
//               <RiMoneyDollarBoxLine
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 CRYPTOCURRENCY
//               </h3>
//             </div>
//           </article>

//           <article>
//             <div className="box-inner">
//               <IoIosCloudOutline
//                 style={{
//                   marginRight: '2rem',
//                   color: 'red',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>STOCKS</h3>
//             </div>
//           </article>

//           <article>
//             <div className="box-inner">
//               <PiSpeakerSimpleNone
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>ETFS</h3>
//             </div>
//           </article>

//           <article>
//             <div className="box-inner">
//               <CiBoxes
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>FOREX</h3>
//             </div>
//           </article>

//           <article className="estate">
//             <div className="box-inner">
//               <BsHouses
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 REAL ESTATE
//               </h3>
//             </div>
//           </article>
//         </section>
//       </Wrapper>

//       <section
//         style={{
//           background: 'var(--primary-500)',
//           padding: '6rem',
//           textAlign: 'center',
//           color: 'white',
//         }}
//       >
//         <h2
//           style={{
//             fontWeight: 'bold',
//             maxWidth: '60rem',
//             margin: '2rem auto',
//             fontSize: '2.4rem',
//           }}
//         >
//           Our emphasis lies on industries and assets with the best performance.
//         </h2>
//         <p style={{ color: 'white' }}>
//           Well-positioned and equipped to guide you towards your economic
//           aspirations.
//         </p>
//       </section>

//       <Wrapper4>
//         <section className="card-main">
//           <article className="card">
//             <div>
//               <FaCarAlt
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Automotive
//               </h3>
//             </div>

//             <div>
//               <SlEarphones
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Community Service
//               </h3>
//             </div>

//             <div>
//               <PiShoppingCartSimpleLight
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Retail</h3>
//             </div>

//             <div>
//               <BiBookBookmark
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Education
//               </h3>
//             </div>

//             <div>
//               <RiMoneyDollarBoxLine
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Financial Service
//               </h3>
//             </div>

//             <div>
//               <TbDeviceIpadSearch
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Publishing
//               </h3>
//             </div>
//           </article>

//           <article className="card">
//             <div>
//               <MdOutlineSupportAgent
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Support</h3>
//             </div>

//             <div>
//               <GoBriefcase
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Travel</h3>
//             </div>

//             <div>
//               <CiMusicNote1
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Media and Entertainment
//               </h3>
//             </div>

//             <div>
//               <CiDeliveryTruck
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Logistics and Distribution
//               </h3>
//             </div>

//             <div>
//               <IoIosFlash
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Mining</h3>
//             </div>

//             <div>
//               <FaRegHeart
//                 style={{
//                   marginRight: '2rem',
//                   color: 'var(--grey-400)',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
//                 Healthcare
//               </h3>
//             </div>
//           </article>
//         </section>
//       </Wrapper4>

//       <Title2
//         title="Invest in the future of financial innovation."
//         text="Invest intelligently in the disruption of a multi-trillion-dollar industry."
//       />

//       <Wrapper>
//         <section className="box-container">
//           <article className="bond">
//             <div className="box-inner">
//               <IoIosCloudOutline
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 GLOBAL INVESTOR REACH
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               Our vibrant community of investors has surpassed 15,000 members
//               from over 150 countries. Blockchain transcends geographical
//               boundaries.
//             </p>
//           </article>

//           <article>
//             <div className="box-inner">
//               <BiBookBookmark
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 INVEST SECURELY
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               We implement security measures equivalent to those of banks,
//               including secure socket layers and two-factor authentication.
//               Additionally, we are registered with our Monetary Authority to
//               conduct securities business and facilitate secure fund transfers
//               through dedicated client money accounts.
//             </p>
//           </article>

//           <article>
//             <div className="box-inner">
//               <PiSpeakerSimpleNone
//                 style={{
//                   marginRight: '2rem',
//                   color: 'red',
//                   fontSize: '3rem',
//                 }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 INVEST WITH PROTECTION
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               Experience professional-grade protection with our distinctive
//               pooled investment structure, enabling your investments to grow in
//               a tax-efficient manner.
//             </p>
//           </article>

//           <article>
//             <div className="box-inner">
//               <CiBoxes
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 INVEST WITH SPECIALISTS
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               We stand as the world's largest online investment community,
//               comprised of professional investors dedicated to investing in
//               financial innovation and technology.
//             </p>
//           </article>

//           <article>
//             <div className="box-inner">
//               <RiMoneyDollarBoxLine
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 ONGOING INVESTOR RELATIONS
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               Investors and businesses can conveniently stay connected online
//               throughout the investment lifecycle and store all documentation in
//               a centralized location.
//             </p>
//           </article>

//           <article className="estate">
//             <div className="box-inner">
//               <BsHouses
//                 style={{ marginRight: '2rem', color: 'red', fontSize: '3rem' }}
//               />
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
//                 NATIVELY DIGITAL
//               </h3>
//             </div>
//             <p className="bond-text" style={{ marginTop: '1.2rem' }}>
//               We serve as the digital alternative to traditional asset
//               management—borderless, hyper-efficient, and accessible from any
//               smartphone. No paperwork is necessary.
//             </p>
//           </article>
//         </section>
//       </Wrapper>

//       <InvestmentCard />

//       <Ceo />

//       <section>
//         <h2
//           style={{
//             textAlign: 'center',
//             fontWeight: '700',
//             fontSize: '2.5rem',
//             color: 'var(--primary-500',
//             marginTop: '3rem',
//             marginBottom: '2rem',
//           }}
//         >
//           HERE FOR YOU
//         </h2>
//         <h3
//           style={{
//             textAlign: 'center',
//             fontWeight: '700',
//             fontSize: '1rem',
//             marginBottom: '3rem',
//           }}
//         >
//           Explore More
//         </h3>
//       </section>

//       <Wrapper3>
//         <div className="about-gal">
//           <article>
//             <img src={image1} alt="abt1" className="abt-img" />
//             <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>Legal</h4>
//             <p>
//               We are a well-established and reputable brokerage firm. With our
//               extensive experience, clients from all over the world have
//               consistently expressed positive feedback. Our commitment is to
//               provide a market-leading, industry-standard brokerage service.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/about"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 Learn more
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>
//           <article>
//             <img src={image2} alt="abt2" className="abt-img" />
//             <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>
//               Operations
//             </h4>
//             <p>
//               We are a well-regulated and secure trading platform, trusted by
//               thousands. Forex Birds addresses this concern effectively, being
//               registered with and duly regulated by the UK's Securities and
//               Investments Commission (ASIC).
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/about"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 Learn more
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>
//           <article>
//             <img src={image3} alt="abt3" className="abt-img" />
//             <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>
//               Finance
//             </h4>
//             <p>
//               We secured millions in venture capital funding to safeguard
//               against market hazards, ensuring full insurance coverage for our
//               funds.
//             </p>
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',

//                 borderRadius: '2rem',
//               }}
//               className="selectText"
//             >
//               <Link
//                 to="/about"
//                 style={{
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                   padding: '0.8rem 0rem',
//                 }}
//               >
//                 Learn more
//               </Link>
//               <FaArrowRight
//                 style={{
//                   marginLeft: '1rem',
//                   fontWeight: '700',
//                   color: 'var(--primary-500)',
//                 }}
//               />
//             </div>
//           </article>
//         </div>
//       </Wrapper3>
//     </>
//   );
// };
// export default Landing;

{
  coins.map((coin) => {
    const {
      name: tetherName,
      price: tetherPrice,
      symbol: tetherSymbol,
      delta_24h: tetherDelta_24h,
      show_symbol: tetherShowSymbol,
    } = coins[0];
    const {
      name: ethName,
      price: ethPrice,
      symbol: ethSymbol,
      delta_24h: ethDelta_24h,
      show_symbol: ethShowSymbol,
    } = coins[0];
    let {
      name: BtcName,
      price: BtcPrice,
      symbol: BtcSymbol,
      delta_24h: BtcDelta_24h,
      show_symbol: BtcShowSymbol,
    } = coins[1];
    const {
      name: EthName,
      price: EthPrice,
      symbol: EthSymbol,
      delta_24h: EthDelta_24h,
      show_symbol: EthShowSymbol,
    } = coins[2];
    const num = Number(BtcPrice);

    return (
      <article key={nanoid()} className="coins">
        <div className="coins-inner">
          <img src={btcImg} alt="btc-image" />

          <h5>{BtcName}</h5>
          <span>[{BtcSymbol}]</span>
          <span>{formatter.format(Number(BtcPrice).toFixed(2))}</span>
          <span
            style={{
              color: Number(BtcDelta_24h) < 0 ? 'red' : 'green',
            }}
          >
            {BtcDelta_24h}%
          </span>
        </div>
      </article>
    );
  });
}
