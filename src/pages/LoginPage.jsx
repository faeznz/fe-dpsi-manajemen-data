import React from 'react';
import LoginForm from '../components/Login/LoginForm'
import IconApp from '../components/Sidebar/IconApp';


const LoginPage = () => {
  return (
    <div className='flex flex-row w-screen justify-between'>
      <div className='flex flex-col bg-[#397683] h-screen w-1/6 justify-center items-center'>
        <IconApp/>
      </div>

      <div className='flex flex-col justify-center items-center w-5/6'>
        <div className='h-1/6 w-full flex justify-start items-end'>
          <p className='text-4xl font-bold text-[#397683] pb-4 pl-8'>LOGIN</p>
        </div>
        <div className='bg-[#D5E2E5] w-full h-5/6 flex flex-col justify-center items-center'>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage