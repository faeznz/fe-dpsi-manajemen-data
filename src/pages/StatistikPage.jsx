import React, { useState, useEffect } from 'react';
import IconApp from '../components/Sidebar/IconApp';
import SideNav from '../components/Sidebar/SideNav';
import StatistikCardComponent from '../components/Statistik/StatistikCardComponent';
import { fetchStatistikData } from '../controllers/statistikController';
import LogoutButtonComponent from '../components/Sidebar/LogoutButtonComponent';
import LottieLoading from '../components/Lottie/LottieLoading';

const StatistikPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true when fetching starts
        const transformedData = await fetchStatistikData();
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-row w-screen justify-between'>
      <div className='flex fixed flex-col bg-[#397683] h-screen w-1/6 justify-around items-center p-4'>
        <IconApp />
        <SideNav />
        <LogoutButtonComponent/>
      </div>

      <div className='flex flex-col bg-[#397683] h-screen w-1/6 justify-around items-center p-4'></div>

      <div className='flex flex-col pt-24 w-5/6'>
        <div className='h-1/6 w-full flex justify-between items-end px-8 py-4'>
          <p className='text-4xl font-bold text-[#397683]'>STATISTIK DATA</p>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <div className='h-6 w-6 bg-[#397683] rounded-full'></div>
            <p className='text-[#397683]'>{localStorage.getItem('username')}</p>
          </div>
        </div>
        <div className='bg-[#D5E2E5] w-full min-h-full flex flex-col justify-center items-center p-12'>
          {loading ? (
            <LottieLoading/>
          ) : (
            data.map((monthData, index) => (
              <StatistikCardComponent
                key={index}
                month={monthData.month}
                values={monthData.values}
                loading={loading}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default StatistikPage;
