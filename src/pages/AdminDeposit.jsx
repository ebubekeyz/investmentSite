import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/AdminDeposit';
import FooterMobile2 from '../components/FooterMobile2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';

const AdminDeposit = () => {
  const [deposit, setDeposit] = useState([]);
  const payReceiptFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt', {
        withCredentials: true,
      });

      setDeposit(res.data.payReceipt);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    payReceiptFunc();
  }, [payReceiptFunc]);

  let idd = 0;
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar2 />
        <section className="deposit">
          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Username</th>
                  <th>Coin</th>
                  <th>Plan</th>
                  <th>Amount</th>

                  <th>Receipt</th>
                  <th>status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {deposit
                  ? deposit.map((item) => {
                      console.log(item);
                      const {
                        _id: id,
                        createdAt,
                        status,
                        receipt,
                        user: { username: username },
                        amount: {
                          _id: amountId,
                          amount: amt,
                          coin: {
                            coinType: coin,
                            invest: {
                              percent: percent,
                              days: days,
                              plan: plan,
                            },
                          },
                        },
                      } = item;
                      console.log(amountId);
                      item.idd = idd++;
                      const update = `/editDeposit?id=${id}`;
                      const del = `/deleteDeposit?id=${id}`;
                      const bon = `/refBonus?id=${amountId}`;

                      const url = 'https://trex-holding-server.com';

                      const img = `${url}/${receipt}`;

                      return (
                        <tr>
                          <td>{idd}</td>
                          <td>{username}</td>
                          <td>{coin}</td>
                          <td>{plan}</td>
                          <td>€{amt}</td>

                          <td>
                            <img src={img} style={{ width: '5rem' }} />
                          </td>
                          <td
                            style={{
                              color: status === 'paid' ? 'green' : 'red',
                            }}
                          >
                            {status}
                          </td>
                          <td>
                            <Link
                              to={update}
                              type="button"
                              style={{ background: 'red' }}
                              className="btn"
                            >
                              Edit
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={del}
                              type="button"
                              style={{ background: 'red' }}
                              className="btn"
                            >
                              delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : 'No Deposit'}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <FooterMobile2 />
    </Wrapper>
  );
};
export default AdminDeposit;
