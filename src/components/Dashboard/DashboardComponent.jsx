import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterDashboard from './FilterDashboard'
import SearchDashboard from './SearchDashboard'
import TabelDataComponent from './TabelDataComponent';

const DashboardComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='w-full h-full flex flex-col justify-start'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          {/* <FilterDashboard/> */}
          <SearchDashboard searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <Link to='/tambah-data' className='h-8 w-32 bg-[#359DAC] flex justify-center items-center rounded-md text-white'>Tambah</Link>
      </div>
      <div className='w-full flex justify-center mt-24'>
        <TabelDataComponent searchTerm={searchValue} />
      </div>
    </div>
  )
}

export default DashboardComponent