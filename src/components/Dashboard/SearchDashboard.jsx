import React from 'react';
import { IoSearchSharp, IoClose } from "react-icons/io5";

const SearchDashboard = ({ searchValue, setSearchValue }) => {
  return (
    <div className='flex flex-row justify-between items-center bg-transparent w-64 h-8 border border-[#397683] rounded-lg px-2'>
      <div className='flex flex-row justify-center items-center'>
        <IoSearchSharp />
        <input
          type="text"
          placeholder='Search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='bg-transparent h-8 px-2 focus:outline-none'
        />
      </div>
      {searchValue && (
        <IoClose onClick={() => setSearchValue('')} />
      )}
    </div>
  );
};

export default SearchDashboard;
