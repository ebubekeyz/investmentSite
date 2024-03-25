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
  // user id
  const [userId, setUserId] = useState('');

  const fetchUserId = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { userId } = response.data.user;

      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  // end userId

  // main balance
  const [mainBalance, setMainBalance] = useState({
    amount: '',
    percent: '',
    days: '',
    plan: '',
    status: '',
    createdAt: '',
    coin: '',
  });
  const fetchMainBalance = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/payReceipt/showUserPayReceipt',
        {
          withCredentials: true,
        }
      );

      const bal = response.data.payReceipt;
      const length = bal.length - 1;

      const {
        createdAt,
        status,
        amount: {
          amount: amt,
          coin: {
            coinType: coin,
            invest: { percent: percent, days: days, plan: plan },
          },
        },
      } = bal[length];
      setMainBalance({
        amount: amt,
        percent: percent,
        days: days,
        plan: plan,
        status: status,
        coin: coin,
        createdAt: createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMainBalance();
  }, []);

  const calculateTotalPercent = () => {
    const total = (mainBalance.amount * mainBalance.percent) / 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);
  console.log(mainBalance.days);

  const profit = () => {
    const date = new Date();
    const investDate = new Date(mainBalance.createdAt);

    let getInvestDate = investDate.getDate();
    let getDate = date.getDate();
    let num = calculateTotalPercent();

    if (getDate === getInvestDate + mainBalance.days) {
      return num;
    } else {
      return (num = 0);
    }
    // if (getDate === getInvestDate + mainBalance.days + 1) {
    //   return (num = 0);
    // }

    return num;
  };
  useEffect(() => {
    profit();
  }, []);

  const postProfit = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/profit',
        { amount: profit() },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postProfit();
  }, []);

  // end main balance

  // Balance

  const [accountBalance, setAccountBalance] = useState([]);

  const fetchBalance = async () => {
    try {
      const response = await mainFetch.get('/api/v1/payReceipt', {
        withCredentials: true,
      });

      setAccountBalance(response.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const filterBalance = accountBalance.filter((item) => item.user === userId);

  const filterBalancePaid = filterBalance.filter(
    (item) => item.status === 'paid'
  );

  const filterBalancePending = filterBalance.filter(
    (item) => item.status === 'pending'
  );

  const filterBalancePaidReduce = filterBalancePaid.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);
  const filterBalancePendingReduce = filterBalancePending.reduce(
    (acc, curr) => {
      const {
        amount: { amount: amt },
      } = curr;
      return acc + amt;
    },
    0
  );

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

  // post earning

  const [earning, setEarning] = useState([]);
  const fetchEarning = async () => {
    try {
      const response = await mainFetch.get('/api/v1/earning/showUserEarning', {
        withCredentials: true,
      });

      setEarning(response.data.earning);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEarning();
  }, []);

  const earningReduce = earning.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end earning

  // curr withdraw
  const [currWithdraw, setCurrWithdraw] = useState([]);

  const fetchCurrWithdraw = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/withdraw/showUserWithdraw',
        {
          withCredentials: true,
        }
      );
      const withdrawal = response.data.withdraw;
      const length = withdrawal.length - 1;
      const { amount } = withdrawal[length];
      setCurrWithdraw(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrWithdraw();
  }, []);

  // end curr withdraw

  // Total Withdraw
  const [withdraw, setWithdraw] = useState([]);

  const fetchWithdraw = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/withdraw/showUserWithdraw',
        {
          withCredentials: true,
        }
      );
      setWithdraw(response.data.withdraw);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWithdraw();
  }, []);

  const filterWithdraw = withdraw.filter((item) => item.status === 'sent');
  const filterWithdrawProcessing = withdraw.filter(
    (item) => item.status === 'processing'
  );

  const totalWithdraw = filterWithdraw.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const totalWithdrawProcessing = filterWithdrawProcessing.reduce(
    (acc, curr) => {
      return acc + curr.amount;
    },
    0
  );

  //endTotal withdraw

  const mainAccountBalance =
    mainBalance.amount + earningReduce + profit() - currWithdraw;
  console.log(mainAccountBalance);

  const postBalance = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/balance',
        { balance: mainAccountBalance },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postBalance();
  }, [postBalance]);

  // referral copy
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

  // end referral
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
              {mainBalance.status === 'paid' ? (
                <h4>
                  {formatter.format(Number(mainAccountBalance).toFixed(2))}
                </h4>
              ) : (
                <h4>{formatter.format(0)}</h4>
              )}
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

                {filterWithdraw ? (
                  <h4>{formatter.format(totalWithdraw)}</h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-2">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total profit</p>

                {mainBalance.status === 'paid' ? (
                  <h4>{formatter.format(Number(profit()).toFixed(2))}</h4>
                ) : (
                  <h4>{formatter.format(Number(0).toFixed(2))}</h4>
                )}
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-3">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Current Invest</p>

                {mainBalance.status === 'paid' ? (
                  <h4>{formatter.format(mainBalance.amount)}</h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-1">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total Invest</p>

                {filterBalancePaid ? (
                  <h4>
                    {formatter.format(
                      Number(filterBalancePaidReduce).toFixed(2)
                    )}
                  </h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div>
          </aside>
          <article className="upgrade-main">
            <h3>Your Current Level</h3>
            <div className="upgrade">
              <p style={{ maxWidth: '10rem' }}>
                {mainBalance.status === 'paid' ? mainBalance.plan : 'N/A'}
              </p>

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

                    return <p>{username}</p>;
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
              <h4>
                {mainBalance.status === 'paid' ? mainBalance.plan : 'N/A'}
              </h4>
            </article>

            <article>
              <span className="pend-icon" id="icon2">
                <IoIosWallet className="icon-main" />
              </span>
              <h5>Pending Invest</h5>
              {filterBalancePending ? (
                <h4>
                  {formatter.format(
                    Number(filterBalancePendingReduce).toFixed(2)
                  )}
                </h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon3">
                <MdHourglassEmpty className="icon-main" />
              </span>
              <h5>Pending Withdrawal</h5>
              {filterWithdrawProcessing ? (
                <h4>
                  {formatter.format(Number(totalWithdrawProcessing).toFixed(2))}
                </h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon4">
                <GiTwoCoins className="icon-main" id="icon4" />
              </span>
              <h5>Referral Earn</h5>
              {earning.length !== 0 ? (
                <h4>{formatter.format(Number(earningReduce).toFixed(2))}</h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>
          </div>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Dashboard;
