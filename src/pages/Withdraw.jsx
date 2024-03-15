import { useState } from 'react';
import Wrapper from '../assets/wrappers/Withdraw';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

export const loader = async () => {
  const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
    withCredentials: true,
  });

  return { withdrawal: response.data.withdraw };
};

const Withdraw = () => {
  const { withdrawal } = useLoaderData();

  const num = withdrawal.length - 1;

  const percent = (withdrawal[num].amount - withdrawal[num].amount * 10) / 100;
  let withdrawAmt = withdrawal[num].amount - percent;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  withdrawAmt = formatter.format(Number(withdrawAmt).toFixed(2));
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  const [isLoading, setIsLoading] = useState('withdraw');

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
      setIsLoading('submitting');
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
      setIsLoading('success');

      //   setChargePercentage(charge);

      //   console.log(code, chargePercentage);
      toast.success('Withdrawal Successful');
      const data = res.data.withdraw;
      setWithdraw({
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
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsLoading('withdraw');
      toast.error(error?.res?.data?.msg);
    }
  };

  //   const { data, isError, error } = useQuery({
  //     queryKey: ['withdraw'],
  //     queryFn: async () => {
  //       const { data } = await mainFetch.get('/api/v1/withdraw/showUserWithdraw');
  //       return data;
  //     },
  //   });

  return (
    <Wrapper>
      <Navbar2 />
      <section className="withdraw">
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
                <span style={{ color: 'var(--primary-700)' }}>
                  Min amount & 5000.00 Max amount 100000.00
                </span>

                <h5 style={{ marginTop: '1.5rem' }}>Bank Name</h5>
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
                {isLoading}
              </button>
            </div>
          </form>
        </article>

        <article className="withdraw-pending">
          <div className="pending">
            <h3>Pending withdrawal</h3>
            <p>{withdrawAmt}</p>
          </div>

          <div className="pending">
            <h3>Withdraw Instruction</h3>
          </div>

          <div className="pending">
            <h3>Payment may take 24hours to process. Thank you!</h3>
          </div>
        </article>
      </section>
      <FooterMobile />
    </Wrapper>
  );
};
export default Withdraw;
