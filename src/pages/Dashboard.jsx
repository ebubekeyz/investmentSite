import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Wrapper>
      <section className="dashboard">
        <Navbar2 />
        <Sidebar />
      </section>
    </Wrapper>
  );
};
export default Dashboard;
