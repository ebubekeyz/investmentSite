import { useState } from 'react';
import Wrapper from '../assets/wrappers/Withdraw';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import { useNavigation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';

const Withdraw = () => {
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  const [isLoading, setIsLoading] = useState(false);

  const [withdraw, setWithdraw] = useState({
    withdrawalMethod: '',
    amount: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
    currentBalance: '',
    walletAddress: '',
    status: '',
    charge: '',
  });

  const [code, setCode] = useState('');
  const [chargePercentage, setChargePercentage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    let {
      withdrawalMethod,
      amount,
      bankName,
      accountName,
      accountNumber,
      currentBalance,
      walletAddress,
      status,
      charge,
    } = withdraw;

    charge = (amount * 10) / 100;

    try {
      const res = await mainFetch.post(
        '/api/v1/withdraw',
        {
          withdrawalMethod: withdrawalMethod,
          amount: amount,
          bankName: bankName,
          accountName: accountName,
          accountNumber: accountNumber,
          currentBalance: currentBalance,
          walletAddress: walletAddress,
          charge,
        },
        { withCredentials: true }
      );
      setIsLoading(true);
      //   setChargePercentage(charge);

      //   console.log(code, chargePercentage);
      toast.success('Withdrawal Successful');
      const data = res.data.withdraw;
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.res?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <section>
        <Navbar2 />
        <FooterMobile />

        <article>
          <form className="withdrawForm" onSubmit={handleSubmit}>
            <div className="withdrawForm-inner">
              <h4>Current balance $ 200.00</h4>
              <h4>Withdraw Method</h4>
              <select
                className="form-input"
                id="select"
                name="withdrawalMethod"
                style={{ color: 'var(--grey-400)' }}
                value={withdraw.withdrawalMethod}
                onChange={(e) => {
                  setWithdraw({ ...withdraw, [e.target.name]: e.target.value });
                }}
              >
                <option>Select Options</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Bitcoin">Bitcoin</option>
              </select>

              <div className="bank">
                <h5>Withdraw Amount</h5>
                <input
                  type="text"
                  name="amount"
                  className="form-input input"
                  value={withdraw.amount}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <span>Min amount & 5000.00 Max amount 100000.00</span>

                <h5>Bank Name</h5>
                <input
                  type="text"
                  name="bankName"
                  className="form-input input"
                  value={withdraw.bankName}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <h5>Account Name</h5>
                <input
                  type="text"
                  name="accountName"
                  className="form-input input"
                  value={withdraw.accountName}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <h5>Wallet Address</h5>
                <input
                  type="text"
                  name="walletAddress"
                  className="form-input input"
                  value={withdraw.walletAddress}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <h5>Account Number</h5>
                <input
                  type="text"
                  name="accountNumber"
                  className="form-input input"
                  value={withdraw.accountNumber}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <h5>Withdraw Charge</h5>
                <input
                  type="text"
                  name="charge"
                  className="form-input input"
                  value={(withdraw.amount * 10) / 100}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {submitting ? 'submitting' : 'withdraw'}
              </button>
            </div>
          </form>
        </article>
      </section>
    </Wrapper>
  );
};
export default Withdraw;
