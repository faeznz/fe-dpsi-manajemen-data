import React from 'react';

import IconBox from "../../assets/images/icon-box.svg";

const IconApp = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={IconBox} alt="" />
        <p className='text-lg font-bold text-white mt-4'>Admin Dashboard</p>
    </div>
  )
}

export default IconApp