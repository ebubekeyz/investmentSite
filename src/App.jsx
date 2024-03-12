import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  HomeLayout,
  Landing,
  Login,
  Register,
  SinglePageError,
  Error,
  // Dashboard,
  // DashboardLanding,
  Faqs,
  Contact,
  Investment,
  Terms,
  Privacy,
  Referral,
  Reset,
  ResetPassword,
} from './pages';
import { loader as landingLoader } from './pages/Landing.jsx';
import { action as actionLoader } from './pages/Login.jsx';
import { action as actionLoader2 } from './pages/Register.jsx';
import { action as actionLoader3 } from './pages/Reset.jsx';
import { action as actionLoader4 } from './pages/ResetPassword.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/investment',
        element: <Investment />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/privacy',
        element: <Privacy />,
      },
      {
        path: '/referral',
        element: <Referral />,
      },
      {
        path: '/register',
        element: <Register />,
        errorElement: <SinglePageError />,
        action: actionLoader2,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <SinglePageError />,
        action: actionLoader,
      },
      {
        path: '/reset',
        element: <Reset />,
        errorElement: <SinglePageError />,
        action: actionLoader3,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword />,
        errorElement: <SinglePageError />,
        action: actionLoader4,
      },
    ],
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   errorElement: <Error />,
  //   children: [
  //     {
  //       index: true,
  //       element: <DashboardLanding />,
  //       errorElement: <SinglePageError />,
  //     },
  //   ],
  // },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
