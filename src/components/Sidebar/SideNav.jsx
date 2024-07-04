import React from 'react';
import { Link } from 'react-router-dom';

import { MdSpaceDashboard } from "react-icons/md";
import { RiBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const SideNav = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-4'>
          <Link to="/" className='flex flex-row justify-center items-center gap-4 text-md text-white'>
            <MdSpaceDashboard className='text-xl'/>
            <p>Dashboard</p>
          </Link>
          <Link to="/statistik" className='flex flex-row justify-center items-center gap-4 text-md text-white'>
            <RiBook2Fill className='text-xl'/>
            <p>Report</p>
          </Link>
          <Link to="/pengaturan" className='flex flex-row justify-center items-center gap-4 text-md text-white'>
            <IoMdSettings className='text-xl'/>
            <p>Pengaturan</p>
          </Link>
    </div>
  );
}

export default SideNav;
