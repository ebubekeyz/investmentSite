import { Outlet, useNavigation, useOutletContext } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNav from '../components/SubNav';
import Line from '../components/Line';
import { useState } from 'react';
import Whatsapp from '../components/Whatsapp';
import { questions as data } from '../utils';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      {/* <SubNav />
      <Line /> */}
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
      {/* <Whatsapp /> */}
      <Footer />
    </div>
  );
};
export default HomeLayout;
