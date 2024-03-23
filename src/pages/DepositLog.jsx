import { FaArrowLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/DepositLog';
import FooterMobile from '../components/FooterMobile';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import Navbar2 from '../components/Navbar2';

const DepositLog = () => {
  const [receipt, setReceipt] = useState([]);
  const [show, setShow] = useState(false);

  const showAmountId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });
      setShow(true);
      const payMajor = res.data.payReceipt;
      setReceipt(payMajor);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showAmountId();
  }, [showAmountId]);
  console.log(receipt);
  const backHandler = () => {
    window.history.back();
  };

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar />
        <section className="section-center">
          <article className="top2 top">
            <h4>Deposit log</h4>

            <div className="top-inner">
              <span className="space">
                {' '}
                <FaArrowLeft className="back-icon" onClick={backHandler} />
              </span>
              <span className="back">Back</span>
            </div>
          </article>

          <article className="withdraw-pending">
            <div className="pending">
              <h4>Deposit log</h4>
              <p></p>
            </div>

            {receipt ? (
              <div>
                <article className="header">
                  <h4>COIN</h4>
                  <h4>RECEIPT</h4>
                  <h4>AMOUNT</h4>
                  <h4>STATUS</h4>
                  <h4>DATE</h4>
                </article>

                {receipt.map((item) => {
                  const {
                    _id: id,
                    receipt,
                    status,
                    createdAt,
                    amount: {
                      amount: amt,
                      coin: {
                        coinType: coin,
                        invest: { plan: plan },
                      },
                    },
                  } = item;
                  const url = 'https://trex-holding-server.com';

                  const img = `${url}/${receipt}`;

                  return (
                    <article key={id} className="header">
                      <h4>{coin}</h4>
                      <div className="receipt">
                        <img src={img} alt="image" />
                      </div>

                      <h4>{formatter.format(Number(amt).toFixed(2))}</h4>
                      <h4>{status}</h4>
                      <h4>
                        {new Date(createdAt).getDate()}/
                        {new Date(createdAt).getMonth() + 1}/
                        {new Date(createdAt).getFullYear()}
                      </h4>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h3 className="empty">No Log Found</h3>
            )}
          </article>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default DepositLog;
