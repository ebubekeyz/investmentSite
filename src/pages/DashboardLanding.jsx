import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { useQuery } from '@tanstack/react-query';

export const loader = () => {
  //   const { data } = useQuery({
  //     queryKey: ['tasks'],
  //     queryFn: async () => {
  //       const { data } = await customFetch.get('/');
  //       return data;
  //     },
  //   });
  //   return { data };
};

const DashboardLanding = () => {
  //   const { data } = useLoaderData();
  return (
    <>
      <h1>DashboardLanding</h1>
    </>
  );
};
export default DashboardLanding;
