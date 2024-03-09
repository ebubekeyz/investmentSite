import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Login';
import { useState } from 'react';

const ResetPassword = () => {
  const [date, setDate] = useState(new Date());
  const mainDate = date.getFullYear();
  return (
    <Wrapper>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        <form
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h2
            className="logo"
            style={{
              zIndex: '4',
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '1rem',
            }}
          >
            <Link to="/">Trest-Holding</Link>
          </h2>
          <h4>ResetPassword </h4>
          <div className="form-control">
            <input
              type="text "
              className="form-input"
              name="newPassword"
              placeholder="New Password"
            />
            <input
              type="password "
              className="form-input"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <button type="submit" className="btn">
              ResetPassword
            </button>
            <p>
              <Link to="/login" className="reg">
                Login{' '}
              </Link>
            </p>
            <p style={{ marginTop: '1rem' }}>
              © Copyright &nbsp;<span>{mainDate}&nbsp;</span> Fxidealtrade.Co
              &nbsp; All Rights Reserved.
            </p>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default ResetPassword;
