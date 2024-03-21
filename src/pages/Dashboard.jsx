import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import FooterMobile from '../components/FooterMobile';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { IoIosFlash } from 'react-icons/io';
import { MdHourglassEmpty } from 'react-icons/md';
import { IoIosWallet } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';

const Dashboard = () => {
  const [userIdd, setUserIdd] = useState('');
  const [username, setUsername] = useState('');
  const fetchUser = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { username } = response.data.user;
      setUsername(username);
      setUserIdd(`https://trex-holding.com/register/${username}`);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
    status: '',
    createdAt: '',
  });

  const showBalance = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });

      const payMajor = res.data.payReceipt;
      const num = payMajor.length - 1;
      const {
        createdAt,
        status,
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
        createdAt: createdAt,
      });
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showBalance();
  }, []);

  const [calcPercentage, setCalcPercentage] = useState(0);
  const calculateTotalPercent = () => {
    const total = (balance.amount * balance.percent) / 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);

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
  }, []);

  const profit = () => {
    const date = new Date();
    const investDate = new Date(balance.createdAt);

    let getInvestDate = investDate.getDate();
    let getDate = date.getDate();
    let num = calculateTotalPercent();

    if (getDate === getInvestDate) {
      num = 0;
    }
    if (getDate === getInvestDate + balance.days) {
      num = num;
    }
    if (getDate + getInvestDate + balance.days + 1) {
      num = 0;
    }

    return num;
  };
  useEffect(() => {
    profit();
  }, []);
  console.log(profit());

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
  }, []);

  const [totalBal, setTotalBal] = useState([]);

  const showTotalBal = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });

      const payMajor = res.data.payReceipt;
      setTotalBal(payMajor);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showTotalBal();
  }, []);

  const totalAmount = totalBal?.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;

    return acc + amt;
  }, 0);

  const [invest, setInvest] = useState([]);

  const showInvest = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/payReceipt/showUserPayReceipt',
        {
          withCredentials: true,
        }
      );

      setInvest(response.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showInvest();
  }, []);

  const filterInvest = invest.filter((item) => item.status === 'pending');

  const reduceInvest = filterInvest.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);

  const [withdrawAmount, setWithdrawAmount] = useState([]);

  const withdrawMainFetch = async () => {
    try {
      const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
        withCredentials: true,
      });

      const withdrawal = response.data.withdraw;

      setWithdrawAmount(withdrawal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    withdrawMainFetch();
  }, [withdrawMainFetch]);

  const filterWithdraw = withdrawAmount.filter(
    (item) => item.status === 'processing'
  );

  const reduceWithdraw = filterWithdraw.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const [totalWithdraw, setTotalWithdraw] = useState([]);

  const totalWithdrawFetch = async () => {
    try {
      const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
        withCredentials: true,
      });

      const withdrawal = response.data.withdraw;

      setTotalWithdraw(withdrawal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalWithdrawFetch();
  }, [totalWithdrawFetch]);

  const reduceTotalWithdrawal = totalWithdraw.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const [user, setUser] = useState([]);

  const showUserRef = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });

      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUserRef();
  }, [showUserRef]);

  const filterUser = user.filter((item) => item.referralId === `${username}`);

  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar className="" />
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

                <h4>{formatter.format(reduceTotalWithdrawal)}</h4>
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

                <p>Current Invest</p>

                <h4>{formatter.format(balance.amount)}</h4>
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-1">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total Invest</p>

                <h4>{formatter.format(Number(totalAmount).toFixed(2))}</h4>
              </article>
            </div>
          </aside>
          <article className="upgrade-main">
            <h3>Your Current Level</h3>
            <div className="upgrade">
              <p style={{ maxWidth: '10rem' }}>{balance.plan}</p>
              {/* <p>{balance.coin}</p> */}
              <Link to="/investDash" type="btn" className="upgrade-btn">
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
            <h4>Reference tree (You have {filterUser.length} referral)</h4>

            <div className="main-tree">
              {filterUser
                ? filterUser.map((item) => {
                    const { _id: id, username } = item;

                    return (
                      <div className="main-tree">
                        <p key={id}>{username}</p>;
                      </div>
                    );
                  })
                : '<p>You dont have any referral yet. PLease invite a user and earn</p>'}
            </div>
          </article>

          <div className="pending">
            <article>
              <span className="pend-icon" id="icon1">
                <IoIosFlash className="icon-main" />
              </span>
              <h5>Current Plan</h5>
              <h4>{balance.plan}</h4>
            </article>

            <article>
              <span className="pend-icon" id="icon2">
                <IoIosWallet className="icon-main" />
              </span>
              <h5>Pending Invest</h5>
              <h4>{formatter.format(Number(reduceInvest).toFixed(2))}</h4>
            </article>

            <article>
              <span className="pend-icon" id="icon3">
                <MdHourglassEmpty className="icon-main" />
              </span>
              <h5>Pending Withdrawal</h5>
              <h4>{formatter.format(Number(reduceWithdraw).toFixed(2))}</h4>
            </article>

            <article>
              <span className="pend-icon" id="icon4">
                <GiTwoCoins className="icon-main" id="icon4" />
              </span>
              <h5>Referral Earn</h5>
              <h4>{formatter.format(Number(0).toFixed(2))}</h4>
            </article>
          </div>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Dashboard;
