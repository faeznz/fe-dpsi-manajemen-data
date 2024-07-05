import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById, updateItem } from '../../controllers/itemController';
import LottieLoading from '../Lottie/LottieLoading'; // Assuming you have a LottieLoading component

const EditDataFormComponent = () => {
  const { id } = useParams();
  const [name, setNamaBarang] = useState('');
  const [quantity, setJumlah] = useState('');
  const [description, setKeterangan] = useState('');
  const [dateIn, setTanggalMasuk] = useState('');
  const [dateOut, setTanggalKeluar] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await fetchItemById(id);
        setNamaBarang(item.name);
        setJumlah(item.quantity);
        setKeterangan(item.description);
        setTanggalMasuk(item.dateIn.split('T')[0]);
        setTanggalKeluar(item.dateOut ? item.dateOut.split('T')[0] : '');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching ends
      }
    };

    getItem();
  }, [id]);

  const handleEditClick = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when updating data
    try {
      const data = { name, quantity, description, dateIn, dateOut };
      await updateItem(id, data);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading after update is done
    }
  };

  const handleBatalClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='w-full flex justify-center items-center'>
      {loading ? (
        <LottieLoading />
      ) : (
        <form className='flex flex-col gap-2 w-3/5 text-sm' onSubmit={handleEditClick}>
          <label>Nama Barang</label>
          <input
            type="text"
            className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
            value={name}
            onChange={(e) => setNamaBarang(e.target.value)}
          />
          <label>Jumlah</label>
          <input
            type="text"
            className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
            value={quantity}
            onChange={(e) => setJumlah(e.target.value)}
          />
          <label>Keterangan</label>
          <select
            className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
            value={description}
            onChange={(e) => setKeterangan(e.target.value)}
          >
            <option value="BAIK">BAIK</option>
            <option value="RUSAK">RUSAK</option>
          </select>
          <div className='flex flex-row justify-between items-center gap-4'>
            <div className='flex flex-col gap-2 w-full'>
              <label>Tanggal Masuk</label>
              <input
                type="date"
                className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
                value={dateIn}
                onChange={(e) => setTanggalMasuk(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label>Tanggal Keluar</label>
              <input
                type="date"
                className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
                value={dateOut}
                onChange={(e) => setTanggalKeluar(e.target.value)}
              />
            </div>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type="submit"
            className={`text-white text-xs font-semibold h-8 rounded-lg mt-12 ${loading ? 'bg-gray-500' : 'bg-[#359DAC]'}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Simpan'}
          </button>
          <button
            onClick={handleBatalClick}
            className='bg-[#AA5656] text-white text-xs font-semibold h-8 rounded-lg'
          >
            Batal
          </button>
        </form>
      )}
    </div>
  );
};

export default EditDataFormComponent;
