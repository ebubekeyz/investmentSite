import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Login';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await mainFetch.post('/api/v1/auth/login', data, {
      withCredentials: true,
    });
    toast.success(response.data.msg);

    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};
const Login = () => {
  const [date, setDate] = useState(new Date());
  const mainDate = date.getFullYear();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
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
        <Form
          method="POST"
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
            <Link to="/">
              <img src={logo} alt="logo" className="logo2" />
            </Link>
          </h2>
          <h4 style={{ color: 'var(--grey-400)' }}>Login </h4>
          <div className="form-control">
            <input
              type="text "
              className="form-input"
              name="username"
              placeholder="Username"
            />
            <input
              type="password "
              className="form-input"
              name="password"
              placeholder="Password"
            />
            <button type="submit" className="btn">
              {isSubmitting ? `Submitting...` : 'login'}
            </button>
            <p>
              <Link to="/reset" className="reg">
                Reset{' '}
              </Link>
            </p>
            <p>
              <span>Dont have an account yet? </span>
              <Link to="/register" className="reg">
                Register{' '}
              </Link>
            </p>
            <p style={{ marginTop: '1rem' }}>
              © Copyright &nbsp;<span>{mainDate}&nbsp;</span> Trest-Holding.
              &nbsp; All Rights Reserved.
            </p>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Login;
