import Wrapper from '../assets/wrappers/Deposit';
import img1 from '../assets/bitcoin-img.png';
import img2 from '../assets/etherum-img.png';
import img3 from '../assets/dogecoin.png';
import img4 from '../assets/tron.png';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';
import FooterMobile from '../components/FooterMobile';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const [isLoading, setIsLoading] = useState('Deposit now');
  const [amountMain, setAmountMain] = useState({
    amount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading('Depositing..');
      const response = await mainFetch.post(
        '/api/v1/amount',
        { amount: amountMain.amount },
        { withCredentials: true }
      );
      setAmountMain({
        amount: '',
      });
      setIsLoading('Deposited..');
      toast.success('Deposit Successful');
      nav('/bitcoin');
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.msg);
    }
  };

  const backHandler = () => {
    window.history.back();
  };

  return (
    <Wrapper>
      <section section-center>
        <article className="top2 top">
          <h4>Password</h4>

          <div className="top-inner">
            <span className="space">
              {' '}
              <FaArrowLeft className="back-icon" onClick={backHandler} />
            </span>
            <span className="back">Back</span>
          </div>
        </article>
        <div className="card">
          <article>
            <img src={img1} className="deposit-img img" alt="bitcoin" />
            <h3 className="deposit-text">BITCOIN</h3>
            <button type="button" onClick={openModal} className="btn">
              Pay now
            </button>
          </article>

          <article>
            <img src={img2} alt="etherum" className="deposit-img img" />
            <h3 className="deposit-text">ETHERUM</h3>
            <button type="button" onClick={openModal} className="btn">
              Pay now
            </button>
          </article>
          <article>
            <img src={img3} alt="etherum" className="deposit-img img" />
            <h3 className="deposit-text">DOGECOIN</h3>
            <button type="button" onClick={openModal} className="btn">
              Pay now
            </button>
          </article>
          <article>
            <img src={img4} alt="etherum" className="deposit-img img" />
            <h3 className="deposit-text">TRON</h3>
            <button type="button" onClick={openModal} className="btn">
              Pay now
            </button>
          </article>
        </div>

        {open && (
          <div className="deposit-form section-center">
            <article className="form-main">
              <article className="top">
                <h4>Deposit amount</h4>

                <div className="top-inner">
                  <span className="space">
                    {' '}
                    <LiaTimesSolid
                      onClick={closeModal}
                      className="close-icon"
                    />
                  </span>
                </div>
              </article>

              <form onSubmit={handleSubmit}>
                <div className="form-container">
                  <label htmlFor="amount" className="label">
                    Amount
                  </label>

                  <input
                    type="text"
                    className="input"
                    name="amount"
                    placeholder="Enter amount"
                    value={amountMain.amount}
                    onChange={(e) => {
                      setAmountMain({
                        ...amountMain,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="btn-info">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="deposit-btn btn"
                  >
                    close
                  </button>

                  <button type="submit" className="deposit-btn btn">
                    {isLoading}
                  </button>
                </div>
              </form>
            </article>
          </div>
        )}
      </section>

      <FooterMobile />
    </Wrapper>
  );
};
export default Deposit;
