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
  const [mainBalance, setMainBalance] = useState([]);
  const fetchMainBalance = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/payReceipt/showUserPayReceipt',
        {
          withCredentials: true,
        }
      );

      setMainBalance(response.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMainBalance();
  }, [fetchMainBalance]);

  const filterMainBalance = mainBalance.filter(
    (item) => item.status === 'paid'
  );

  const mapMainBalance = filterMainBalance.map((item) => {
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
    } = item;

    return { createdAt, status, amt, coin, percent, days, plan };
  });

  //get the last balance, patch your balance into amount in payReceipt then use updatedAt to calculate your date
  // create a button, give it condition if profit > 0 the button appears else dissapears

  const reduceMainBalanceAmount = filterMainBalance.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);

  const reduceMainBalancePercent = filterMainBalance.reduce((acc, curr) => {
    const {
      amount: {
        coin: {
          invest: { percent: percent },
        },
      },
    } = curr;
    return acc + percent;
  }, 0);

  const reduceMainBalanceDays = filterMainBalance.reduce((acc, curr) => {
    const {
      amount: {
        coin: {
          invest: { days: days },
        },
      },
    } = curr;
    return acc + days;
  }, 0);

  const calculateTotalPercent = () => {
    const total =
      (reduceMainBalanceAmount * reduceMainBalancePercent) /
      (filterMainBalance.length * 100);

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);

  const filterMainBalancePending = mainBalance.filter(
    (item) => item.status === 'pending'
  );

  const reduceMainBalanceAmountPending = filterMainBalancePending.reduce(
    (acc, curr) => {
      const {
        amount: { amount: amt },
      } = curr;
      return acc + amt;
    },
    0
  );

  // end main balance

  // Balance

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

  // get earning

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
  }, [fetchEarning]);

  const earningReduce = earning.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end earning

  // get penalty

  const [penalty, setPenalty] = useState([]);
  const fetchPenalty = async () => {
    try {
      const response = await mainFetch.get('/api/v1/penalty/showUserPenalty', {
        withCredentials: true,
      });

      setPenalty(response.data.penalty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPenalty();
  }, [fetchPenalty]);

  const penaltyReduce = penalty.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end penalty

  // get percentage

  const [percentage, setPercentage] = useState([]);
  const fetchPercentage = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/percentage/showUserPercentage',
        {
          withCredentials: true,
        }
      );

      setPercentage(response.data.percentage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPercentage();
  }, [fetchPercentage]);

  const percentageReduce = percentage.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end percentage

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
    reduceMainBalanceAmount +
    earningReduce +
    percentageReduce -
    penaltyReduce -
    totalWithdraw;

  const profit = () => {
    const date = new Date();

    const length = bal.length - 1;

    const {
      updatedAt,
      amount: {
        coin: {
          invest: { days: days },
        },
      },
    } = mainBalance[length];
    const investDate = new Date(updatedAt);

    let getInvestDate = investDate.getDate();
    let getDate = date.getDate();
    let num = calculateTotalPercent();

    if (getDate === getInvestDate + days) {
      return num;
    }

    return num;
  };
  useEffect(() => {
    profit();
  }, [profit]);

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

  const balMain = mainAccountBalance + profit();

  const postBalance = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/balance',
        { balance: balMain },
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

  const length = bal.length - 1;

  const {
    createdAt,
    status,
    amount: {
      amount: amt,
      coin: {
        invest: { plan: plan, days: days },
      },
    },
  } = mainBalance[length];
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
              {filterMainBalance ? (
                <h4>{formatter.format(Number(balMain).toFixed(2))}</h4>
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

                {filterMainBalance ? (
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

                {status === 'paid' ? (
                  <h4>{formatter.format(amt)}</h4>
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

                {filterMainBalance ? (
                  <h4>
                    {formatter.format(
                      Number(reduceMainBalanceAmount).toFixed(2)
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
                {status === 'paid' ? plan : 'N/A'}
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
              <h4>{status === 'paid' ? plan : 'N/A'}</h4>
            </article>

            <article>
              <span className="pend-icon" id="icon2">
                <IoIosWallet className="icon-main" />
              </span>
              <h5>Pending Invest</h5>
              {filterMainBalancePending ? (
                <h4>
                  {formatter.format(
                    Number(reduceMainBalanceAmountPending).toFixed(2)
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
                <h4>{formatter.format(Number(percentageReduce).toFixed(2))}</h4>
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
