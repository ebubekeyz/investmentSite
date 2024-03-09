import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/investment.jpg';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Investment';
import InvestmentCard from '../components/InvestmentCard';
import Title2 from '../components/Title2';
import Know from '../components/Know';

const Investment = () => {
  return (
    <>
      <Hero2
        name=""
        title="Investment Plan"
        id={nanoid()}
        quote="Our Expertise. Know more about what we do"
        image={img}
      />
      <InvestmentCard />
      <Title2
        title="FUND OBJECTIVE"
        text="The fund’s objective is to outperform gold as a long-term benchmark. The fund will aim to achieve this by using margin lending and arbitrage strategies to earn a yield over and above the gold spot price.The Fund will offer investors an innovative, cost-efficient and secure way to have exposure to the gold market.The Fund will hold cryptoasset gold tokens, namelyTether Gold (XAUT) and PAX Gold (PAXG), with a small portion invested in the Margin Lending Fund"
      />
      <Know />
    </>
  );
};
export default Investment;
