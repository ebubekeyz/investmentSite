import { Outlet, useNavigation } from 'react-router-dom';
import DashboardNavbar from '../components/dashboardNavbar';
import DashboardSidebar from '../components/dashboardSidebar';
import DashboardFooter from '../components/dashboardFooter';

const Dashboard = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'some globals';
  return (
    <div>
      <DashboardNavbar />
      <DashboardSidebar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      <DashboardFooter />
    </div>
  );
};
export default Dashboard;
