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
    const total = (totalAmount * totalPercent) / (balance.length * 100);

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
    const day6 = getDate + 5;
    const day7 = getDate + 7;
    const day8 = getDate + 8;
    const day9 = getDate + 9;
    const day10 = getDate + 11;
    const day11 = getDate + 11;
    const day12 = getDate + 12;
    const day13 = getDate + 13;
    const day14 = getDate + 14;
    const day15 = getDate + 15;
    const day16 = getDate + 16;
    const day17 = getDate + 17;
    const day18 = getDate + 18;
    const day19 = getDate + 19;
    const day20 = getDate + 20;
    const day21 = getDate + 21;
    const day22 = getDate + 22;
    const day23 = getDate + 23;
    const day24 = getDate + 24;
    const day25 = getDate + 25;
    const day26 = getDate + 26;
    const day27 = getDate + 27;
    const day28 = getDate + 28;
    const day29 = getDate + 29;
    const day30 = getDate + 30;

    if (getDate === 30) {
      getDate = 0;
    }

    if (getDate) {
      getDate = 0;
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
    if (getDate === day6) {
      getDate = num * 6;
    }
    if (getDate === day7) {
      getDate = num * 7;
    }
    if (getDate === day8) {
      getDate = num * 8;
    }
    if (getDate === day9) {
      getDate = num * 9;
    }
    if (getDate === day10) {
      getDate = num * 10;
    }
    if (getDate === day11) {
      getDate = num * 11;
    }
    if (getDate === day12) {
      getDate = num * 12;
    }
    if (getDate === day13) {
      getDate = num * 13;
    }
    if (getDate === day14) {
      getDate = num * 14;
    }
    if (getDate === day15) {
      getDate = num * 15;
    }
    if (getDate === day16) {
      getDate = num * 16;
    }
    if (getDate === day17) {
      getDate = num * 17;
    }
    if (getDate === day18) {
      getDate = num * 18;
    }
    if (getDate === day19) {
      getDate = num * 19;
    }
    if (getDate === day20) {
      getDate = num * 20;
    }
    if (getDate === day21) {
      getDate = num * 21;
    }
    if (getDate === day22) {
      getDate = num * 22;
    }
    if (getDate === day23) {
      getDate = num * 23;
    }
    if (getDate === day24) {
      getDate = num * 24;
    }
    if (getDate === day25) {
      getDate = num * 25;
    }
    if (getDate === day26) {
      getDate = num * 26;
    }
    if (getDate === day27) {
      getDate = num * 27;
    }
    if (getDate === day28) {
      getDate = num * 28;
    }
    if (getDate === day29) {
      getDate = num * 29;
    }
    if (getDate === day30) {
      getDate = num * 30;
    }

    return getDate;
  };
  useEffect(() => {
    profit();
  }, []);

  const accBalance = async () => {
    const balance = 200 + totalAmount + profit();
    try {
      const response = await mainFetch.post(
        '/api/v1/balance',
        { balance: balance },
        { withCredentials: true }
      );
      console.log(response.data.balance);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };
  useEffect(() => {
    accBalance();
  }, [accBalance]);

  // const [profitChanges, setProfitChanges] = useState(profit());
  // console.log(profit());
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

            <h4>
              {formatter.format(
                Number(200 + totalAmount + profit()).toFixed(2)
              )}
            </h4>
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

              <h4>{formatter.format(Number(300).toFixed(2))}</h4>
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

              <h4>{formatter.format(Number(profit()).toFixed(2))}</h4>
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
