import React from 'react';
import PropTypes from 'prop-types';

const StatistikCardComponent = ({ month, values }) => {
  const labels = ['BOX MASUK', 'BOX KELUAR', 'KEHADIRAN KARYAWAN'];

  return (
    <div className='w-full px-12 mb-4'>
      <div className='flex flex-col bg-white w-full p-12 rounded-xl'>
        <p className='text-3xl font-bold text-[#359DAC]'>{month}</p>
        <p className='font-semibold text-2xl py-6'>Statistik Data Barang</p>
        <div className='flex flex-row gap-4'>
          {values.map((value, index) => (
            <div key={index} className='flex flex-col justify-center items-start bg-[#359DAC] w-72 h-20 px-4 text-white font-semibold shadow-lg'>
              <p className='font-light'>{labels[index]}</p>
              <p className='text-3xl font-bold'>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

StatistikCardComponent.propTypes = {
  month: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default StatistikCardComponent;
