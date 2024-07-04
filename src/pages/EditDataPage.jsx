import React, { useEffect, useState } from 'react';
import IconApp from '../components/Sidebar/IconApp';
import SideNav from '../components/Sidebar/SideNav';
import EditDataFormComponent from '../components/Dashboard/EditDataFormComponent';
import LogoutButtonComponent from '../components/Sidebar/LogoutButtonComponent';

const EditDataPage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className='flex flex-row w-screen justify-between'>
      <div className='flex flex-col bg-[#397683] h-screen w-1/6 justify-around items-center p-4'>
        <IconApp />
        <SideNav />
        <LogoutButtonComponent />
      </div>
      <div className='flex flex-col justify-center items-center w-5/6'>
        <div className='h-1/6 w-full flex justify-between items-end py-4 px-8'>
          <p className='text-4xl font-bold text-[#397683]'>EDIT DATA</p>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <div className='h-6 w-6 bg-[#397683] rounded-full'></div>
            <p className='text-[#397683]'>{username}</p>
          </div>
        </div>
        <div className='bg-[#D5E2E5] w-full h-5/6 flex flex-col justify-center items-center'>
          <EditDataFormComponent />
        </div>
      </div>
    </div>
  );
};

export default EditDataPage;
