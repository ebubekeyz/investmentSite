// import { useState, useEffect } from 'react';
// import Wrapper from '../assets/wrappers/Members';
// import FooterMobile from '../components/FooterMobile';
// import Navbar2 from '../components/Navbar2';
// import Sidebar2 from '../components/Sidebar2';
// import { mainFetch } from '../utils';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Navbar3 from '../components/Navbar3';

// const AdminDash = () => {
//   const [user, setUser] = useState([]);

//   const userFunc = async () => {
//     try {
//       const response = await mainFetch.get('/api/v1/users', {
//         withCredentials: true,
//       });

//       setUser(response.data.users);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     userFunc();
//   }, [userFunc]);

//   let idd = 0;

//   return (
//     <Wrapper>
//       <Navbar3 />

//       <div className="container">
//         <Sidebar2 />
//         <section className="admin">
//           <div className="table-wrapper">
//             <table class="fl-table">
//               <thead>
//                 <tr>
//                   <th>S/N</th>
//                   <th>Name</th>
//                   <th>Username</th>
//                   <th>Email</th>

//                   <th>Country</th>
//                   <th>City</th>
//                   <th>Phone</th>
//                   <th>Update</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {user
//                   ? user.map((item) => {
//                       item.idd = idd++;
//                       const {
//                         _id: id,
//                         fullName,
//                         username,
//                         email,
//                         phone,
//                         city,
//                         country,
//                         status,
//                         referralId,
//                       } = item;
//                       const update = `/editUser?id=${id}`;
//                       const del = `/deleteUser?id=${id}`;

//                       return (
//                         <tr>
//                           <td>{idd}</td>
//                           <td>{fullName}</td>
//                           <td>{username}</td>
//                           <td>{email}</td>

//                           <td>{country}</td>
//                           <td>{city}</td>
//                           <td>{phone}</td>
//                           <td>
//                             <Link to={update} type="button" className="btn">
//                               update
//                             </Link>
//                           </td>
//                           <td>
//                             <Link
//                               to={del}
//                               type="button"
//                               style={{ background: 'red' }}
//                               className="btn"
//                             >
//                               delete
//                             </Link>
//                           </td>
//                           {/* <td
//                             style={{
//                               color: status === 'verified' ? 'green' : 'red',
//                             }}
//                           >
//                             {status}
//                           </td> */}
//                         </tr>
//                       );
//                     })
//                   : '<p>No User</p>'}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>
//     </Wrapper>
//   );
// };
// export default AdminDash;

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
        status: status,
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

  const balSent = totalBal.filter((item) => item.status === 'paid');

  // const totalBalSent = balSent.reduce((acc, curr) => {
  //   const {
  //     createdAt,
  //     status,
  //     amount: {
  //       amount: amt,
  //       coin: {
  //         invest: { percent: percent, days: days, plan: plan },
  //       },
  //     },
  //   } = curr;

  //   return (acc + amt * percent) / (balSent.length * 100);
  // }, 0);

  const [calcPercentage, setCalcPercentage] = useState(0);
  const calculateTotalPercent = () => {
    const total = (balance.amount * balance.percent) / 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);

  const profit = () => {
    const date = new Date();
    const investDate = new Date(balance.createdAt);

    let getInvestDate = investDate.getDate();
    let getDate = date.getDate();
    let num = calculateTotalPercent();

    if (getDate === getInvestDate + balance.days) {
      return num;
    }
    if (getDate === getInvestDate + balance.days + 1) {
      return (num = 0);
    }

    return num;
  };
  useEffect(() => {
    profit();
  }, []);

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

  const totalAmount = balSent?.reduce((acc, curr) => {
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

  const filterTotalWithdraw = totalWithdraw.filter(
    (item) => item.status === 'sent'
  );

  const reduceSentWithdrawal = filterTotalWithdraw.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

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

  // const earn = filterUser.length * 50;
  const verifiedUser = filterUser.filter((item) => item.status === 'verified');

  const earn = verifiedUser.length * 20;

  const accountBalance = balance.amount + profit() - withdrawAmt + earn;

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
              {balance.status === 'paid' ? (
                <h4>{formatter.format(Number(accountBalance).toFixed(2))}</h4>
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

                {filterTotalWithdraw ? (
                  <h4>{formatter.format(reduceSentWithdrawal)}</h4>
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

                {balance.status === 'paid' ? (
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

                {balance.status === 'paid' ? (
                  <h4>{formatter.format(balance.amount)}</h4>
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

                {balSent ? (
                  <h4>{formatter.format(Number(totalAmount).toFixed(2))}</h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
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
              <h4>{balance.plan}</h4>
            </article>

            <article>
              <span className="pend-icon" id="icon2">
                <IoIosWallet className="icon-main" />
              </span>
              <h5>Pending Invest</h5>
              {filterInvest ? (
                <h4>{formatter.format(Number(reduceInvest).toFixed(2))}</h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon3">
                <MdHourglassEmpty className="icon-main" />
              </span>
              <h5>Pending Withdrawal</h5>
              {filterWithdraw ? (
                <h4>{formatter.format(Number(reduceWithdraw).toFixed(2))}</h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon4">
                <GiTwoCoins className="icon-main" id="icon4" />
              </span>
              <h5>Referral Earn</h5>
              {verifiedUser ? (
                <h4>{formatter.format(Number(earn).toFixed(2))}</h4>
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
