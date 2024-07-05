import React, { useState } from 'react';
import { login } from '../../controllers/authController';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State loading untuk indikator loading
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Mengatur loading menjadi true saat proses submit dimulai
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Mengatur loading kembali menjadi false setelah proses selesai
    }
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <form className='flex flex-col gap-2 w-3/5' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className='bg-transparent h-8 border border-[#397683] rounded-lg px-2'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button
          type="submit"
          className={`flex justify-center items-center text-white text-xs h-8 rounded-lg mt-12 ${loading ? 'bg-gray-500' : 'bg-[#7EA9B2]'}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
