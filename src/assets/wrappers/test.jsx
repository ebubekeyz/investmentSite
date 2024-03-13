import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';

const Dashboard = () => {
  const nav = useNavigate();
  const [user, setUser] = useState(false);
  if (user === false) {
    nav('/login');
  }

  const fetchUsers = async () => {
    try {
      const res = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const users = res.data.user;
      if (res.status === 200) {
        setUser(users);
      }

      return { users };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(user);
  return (
    <Wrapper>
      {user && (
        <section className="dashboard">
          <Navbar2 />
          <Sidebar />
        </section>
      )}
    </Wrapper>
  );
};
export default Dashboard;
