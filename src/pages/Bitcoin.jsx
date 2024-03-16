import { LiaTimesSolid } from 'react-icons/lia';
import Wrapper from '../assets/wrappers/Bitcoin';
import FooterMobile from '../components/FooterMobile';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { mainFetch } from '../utils';
import copy from 'copy-to-clipboard';

const Bitcoin = () => {
  const [copyText, setCopyText] = useState({
    bitcoin: '0x21B7256e1c1D08420DbcDaD780e',
    etherium: '0x21B7256e1c1D08420DbcDaD780e70',
    dogecoin: '0x21B7256e1c1D08420DbcDaD780e70',
    tron: '0x21B7256e1c1D08420DbcDaD780e70',
  });

  //   const handleCopyText = (e) => {
  //     setCopyText(e.target.value);
  //   };

  const copyBitcoin = () => {
    copy(copyText.bitcoin);
    toast.success(`You have copied ${copyText.bitcoin}`);
  };
  const copyEtherium = () => {
    copy(copyText.etherium);
    toast.success(`You have copied ${copyText.etherium}`);
  };
  const copyDogecoin = () => {
    copy(copyText.dogecoin);
    toast.success(`You have copied ${copyText.dogecoin}`);
  };
  const copyTron = () => {
    copy(copyText.tron);
    toast.success(`You have copied ${copyText.tron}`);
  };
  const [receipt, setReceipt] = useState();
  const [isLoading, setIsLoading] = useState('Send Receipt');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading('Sending Receipt...');
      const response = await mainFetch.post(
        '/api/v1/receipt',
        { receipt: receipt },
        { withCredentials: true }
      );

      setIsLoading('Receipt Sent');
      toast.success('Receipt Sent Successfully.');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      setIsLoading('Send Receipt');
    }
  };
  const backHandler = () => {
    window.history.back();
  };
  return (
    <Wrapper>
      <div className="section-center">
        <article className="top2 top">
          <h4>Payment Informations</h4>

          <div className="top-inner">
            <span className="space">
              {' '}
              <FaArrowLeft onClick={backHandler} className="back-icon" />
            </span>
            <span className="back">Back</span>
          </div>
        </article>

        <article className="withdraw-pending">
          <div className="pending">
            <h3>Pending Information</h3>
            <p>To guarantee a smooth and continuous service experience,</p>
            <p>
              We kindly ask that all forthcoming deposits be directed to one of
              the subsequent wallet addresses:
            </p>
          </div>

          <div className="pending">
            <h3 className="coin">BITCOIN ADDRESS</h3>
            <p id="address">{copyText.bitcoin}</p>
            <button onClick={copyBitcoin} type="button" className="btn">
              Copy
            </button>
          </div>

          <div className="pending">
            <h3 className="coin">ETHERIUM ADDRESS</h3>

            <p id="address">{copyText.etherium}</p>
            <button onClick={copyEtherium} type="button" className="btn">
              Copy
            </button>
          </div>

          <div className="pending">
            <h3 className="coin">DOGECOIN ADDRESS</h3>
            <p id="address">{copyText.dogecoin}</p>
            <button onClick={copyDogecoin} type="button" className="btn">
              Copy
            </button>
          </div>

          <div className="pending">
            <h3 className="coin">TRON ADDRESS</h3>
            <p id="address">{copyText.tron}</p>
            <button onClick={copyTron} type="button" className="btn">
              Copy
            </button>
          </div>

          <div className="pending">
            <h3>Requirements</h3>
          </div>

          <div className="pending">
            <form className="receipt-form" onSubmit={handleSubmit}>
              <input type="file" name="receipt" value={receipt} />
              <button type="submit" className="receipt-btn btn">
                {isLoading}
              </button>
            </form>
          </div>
        </article>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Bitcoin;
