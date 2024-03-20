import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import FooterMobile from '../components/FooterMobile';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [userIdd, setUserIdd] = useState('');

  const fetchUser = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { username } = response.data.user;

      setUserIdd(`http://localhost:5173/register/${username}`);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const copyReferral = () => {
    copy(userIdd);
    toast.success(`You have copied ${userIdd}`);
  };

  // const [bonus, setBonus] = useState(200);
  const [balance, setBalance] = useState({
    amount: '',
    percent: '',
    days: '',
    plan: '',
  });

  const showBalance = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });

      const payMajor = res.data.payReceipt;
      const num = payMajor.length - 1;
      const {
        amount: {
          amount: amt,
          coin: {
            invest: { percent: percent, days: days, plan: plan },
          },
        },
      } = payMajor[num];
      setBalance({
        amount: amt,
        percent: percent,
        days: days,
        plan: plan,
      });
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showBalance();
  }, [showBalance]);

  console.log(balance);

  // const totalAmount = balance?.reduce((acc, curr) => {
  //   const {
  //     amount: { amount: amt },
  //   } = curr;

  //   return acc + amt;
  // }, 0);

  // const totalPercent = balance?.reduce((acc, curr) => {
  //   const {
  //     amount: {
  //       coin: {
  //         invest: { percent: percent },
  //       },
  //     },
  //   } = curr;

  //   return acc + percent;
  // }, 0);

  // const totalDays = balance?.reduce((acc, curr) => {
  //   const {
  //     amount: {
  //       coin: {
  //         invest: { days: days },
  //       },
  //     },
  //   } = curr;

  //   return acc + days;
  // }, 0);

  const [calcPercentage, setCalcPercentage] = useState(0);
  const calculateTotalPercent = () => {
    const total = (balance.amount * balance.percent) / 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, [calculateTotalPercent]);

  const profit = () => {
    const date = new Date();

    let getDate = date.getDate();
    const num = calculateTotalPercent();

    // if (getDate === 30) {
    //   getDate = 0;
    // }

    if (getDate) {
      getDate = 0;
    }
    if (getDate === getDate + balance.days) {
      getDate = num;
    }
    if (getDate === getDate + balance.days + 1) {
      getDate = 0;
      setBalance({
        amount: 0,
      });
      setWithdrawAmt(0);
    }

    return getDate;
  };
  useEffect(() => {
    profit();
  }, [profit]);

  const [withdrawAmt, setWithdrawAmt] = useState('');

  const withdrawalFetch = async () => {
    try {
      const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
        withCredentials: true,
      });

      const withdrawal = response.data.withdraw;
      const num = withdrawal.length - 1;
      const { amount } = withdrawal[num];

      setWithdrawAmt(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    withdrawalFetch();
  }, [withdrawalFetch]);

  // const reduceWithdrawal = withdrawAmt.reduce((acc, curr) => {
  //   return acc + curr.amount;
  // }, 0);

  const accBalance = async () => {
    const balance = balance.amount + profit();
    try {
      const response = await mainFetch.post(
        '/api/v1/balance',
        { balance: balance },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };
  useEffect(() => {
    accBalance();
  }, [accBalance]);

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [refTree, setRefTree] = useState([]);
  const showReferral = async () => {
    try {
      const res = await mainFetch.get('/api/v1/referral/showUserReferral', {
        withCredentials: true,
      });

      setRefTree(res.data.referral);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showReferral();
  }, [showReferral]);

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
                Number(balance.amount + profit() - withdrawAmt).toFixed(2)
              )}
            </h4>
          </article>
        </div>
        <aside className="box">
          <div className="acc-bal" id="acc-bal-1">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total Withdraw</p>

              <h4>{formatter.format((withdrawAmt * 10) / 100)}</h4>
            </article>
          </div>

          <div className="acc-bal" id="acc-bal-2">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total profit</p>

              <h4>{formatter.format(Number(profit()).toFixed(2))}</h4>
            </article>
          </div>

          <div className="acc-bal" id="acc-bal-3">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>

              <p>Total Amount Invested</p>

              <h4>{formatter.format(balance.amount)}</h4>
            </article>
          </div>
        </aside>
        <article className="upgrade-main">
          <h3>Your Current Level</h3>
          <div className="upgrade">
            <p style={{ maxWidth: '10rem' }}>{balance.plan}</p>
            {/* <p>{balance.coin}</p> */}
            <Link to="/investment" type="btn" className="upgrade-btn">
              Upgrade
            </Link>
          </div>
        </article>
        <article className="upgrade-main">
          <h3>Invitation Link</h3>
          <div className="upgrade">
            <p>{userIdd}</p>
            <button type="btn" onClick={copyReferral} className="upgrade-btn">
              Copy
            </button>
          </div>
        </article>

        <article className="ref-tree">
          <h4>Reference tree</h4>
          <div className="main-tree">
            {refTree.map((item) => {
              return (
                <div className="main-tree">
                  <p>{item.refId}</p>;
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <FooterMobile />
      <FooterMobile />
    </Wrapper>
  );
};
export default Dashboard;
