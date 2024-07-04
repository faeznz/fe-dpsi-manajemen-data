import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchItems, deleteItem } from '../../controllers/itemController';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TabelDataComponent = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const items = await fetchItems();
        setData(items);
        setFilteredData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setData(data.filter(item => item._id !== id));
      setFilteredData(filteredData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className='overflow-x-auto w-full'>
      <table className='min-w-full border-collapse border border-black'>
        <thead>
          <tr className='bg-[#397683] text-white'>
            <th className='py-2 px-4 border border-black'>No</th>
            <th className='py-2 px-4 border border-black'>Nama Barang</th>
            <th className='py-2 px-4 border border-black'>Jumlah</th>
            <th className='py-2 px-4 border border-black'>Keterangan</th>
            <th className='py-2 px-4 border border-black'>Tanggal Masuk</th>
            <th className='py-2 px-4 border border-black'>Tanggal Keluar</th>
            <th className='py-2 px-4 border border-black'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='py-2 px-4 border-x border-x-black'>{index + 1}</td>
              <td className='py-2 px-4 border-x border-x-black'>{item.name}</td>
              <td className='py-2 px-4 border-x border-x-black'>{item.quantity}</td>
              <td className='py-2 px-4 border-x border-x-black'>{item.description}</td>
              <td className='py-2 px-4 border-x border-x-black'>{new Date(item.dateIn).toLocaleDateString()}</td>
              <td className='py-2 px-4 border-x border-x-black'>{item.dateOut ? new Date(item.dateOut).toLocaleDateString() : '-'}</td>
              <td className='py-2 px-4 border-x border-x-black flex justify-center items-center text-2xl'>
                <Link to={`/edit-data/${item._id}`} className='mr-2'><FaEdit className='text-[#47a44a]'/></Link>
                <button onClick={() => handleDelete(item._id)}><MdDelete className='text-[#AA5656]'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelDataComponent;
