import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import FooterMobile from '../components/FooterMobile';

const Dashboard = () => {
  const [bonus, setBonus] = useState(200);
  const [balance, setBalance] = useState([]);

  const showBalance = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });

      const payMajor = res.data.payReceipt;
      setBalance(payMajor);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showBalance();
  }, []);

  const totalAmount = balance?.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;

    return acc + amt;
  }, 0);

  const totalPercent = balance?.reduce((acc, curr) => {
    const {
      amount: {
        coin: {
          invest: { percent: percent },
        },
      },
    } = curr;

    return acc + percent;
  }, 0);

  const totalDays = balance?.reduce((acc, curr) => {
    const {
      amount: {
        coin: {
          invest: { days: days },
        },
      },
    } = curr;

    return acc + days;
  }, 0);

  const [calcPercentage, setCalcPercentage] = useState(0);
  const calculateTotalPercent = () => {
    const total = ((totalAmount * totalPercent) / balance.length) * 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);

  // console.log(calculateTotalPercent());

  const profit = () => {
    const date = new Date();

    let getDate = date.getDate();
    const num = calculateTotalPercent();

    const day1 = getDate + 1;
    const day2 = getDate + 2;
    const day3 = getDate + 3;
    const day4 = getDate + 4;
    const day5 = getDate + 5;

    if (getDate === 30) {
      getDate = 0;
    }

    if (getDate) {
      getDate = num;
    }
    if (getDate === day1) {
      getDate = num;
    }
    if (getDate === day2) {
      getDate = num * 2;
    }

    if (getDate === day3) {
      getDate = num * 3;
    }
    if (getDate === day4) {
      getDate = num * 4;
    }
    if (getDate === day5) {
      getDate = num * 5;
    }

    return getDate;
  };
  useEffect(() => {
    profit();
  }, []);

  const [profitChanges, setProfitChanges] = useState(profit());

  console.log(profitChanges);
  const calcPercent = () => {};
  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <Wrapper>
      <Navbar2 />
      <section className="dashboard">
        <div className="acc-bal">
          <article>
            <div className="circle">
              <h3 id="circle-one"></h3>
              <h3 id="circ-two"></h3>
            </div>

            <p>Account balance</p>

            <h4>{formatter.format(200 + totalAmount + profitChanges)}</h4>
          </article>
        </div>

        <aside className="box">
          <div className="acc-bal">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total Withdraw</p>

              <h4>{formatter.format(200)}</h4>
            </article>
          </div>

          <div className="acc-bal">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total profit</p>

              <h4>{formatter.format(Number(profitChanges).toFixed(2))}</h4>
            </article>
          </div>

          <div className="acc-bal">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Amount Invested</p>

              <h4>{formatter.format(200)}</h4>
            </article>
          </div>

          <div className="acc-bal">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total Invest</p>

              <h4>{formatter.format(200)}</h4>
            </article>
          </div>
        </aside>
      </section>
      <FooterMobile />
      <FooterMobile />
    </Wrapper>
  );
};
export default Dashboard;
