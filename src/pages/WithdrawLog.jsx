import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/WithdrawLog';
import FooterMobile from '../components/FooterMobile';
import Sidebar from '../components/Sidebar';
import { mainFetch } from '../utils';
import { FaArrowLeft } from 'react-icons/fa';

const WithdrawLog = () => {
  const [receipt, setReceipt] = useState([]);
  const [show, setShow] = useState(false);

  const showAmountId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/withdraw/showUserWithdraw', {
        withCredentials: true,
      });
      setShow(true);
      const payMajor = res.data.withdraw;
      setReceipt(payMajor);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showAmountId();
  }, [showAmountId]);

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
      <div className="container">
        <Sidebar />
        <section className="section-center">
          <article className="top2 top">
            <h4>Withdraw log</h4>

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
              <h4>Investment log</h4>
              <p></p>
            </div>

            {receipt ? (
              <div>
                <article className="header">
                  <h4>METHOD</h4>
                  <h4>AMOUNT</h4>
                  <h4>WALLET ADDRESS</h4>
                  <h4>STATUS</h4>
                  <h4>DATE</h4>
                </article>

                {receipt.map((item) => {
                  const {
                    _id: id,
                    withdrawalMethod,
                    amount,
                    walletAddress,
                    status,
                    createdAt,
                  } = item;

                  return (
                    <article key={id} className="header">
                      <h4>{withdrawalMethod}</h4>

                      <h4>{formatter.format(Number(amount).toFixed(2))}</h4>
                      <h4>{walletAddress}</h4>
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
export default WithdrawLog;
