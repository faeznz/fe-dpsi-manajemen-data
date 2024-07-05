import React from "react";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";

const LogoutButtonComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex flex-row justify-center items-center gap-4 text-md text-white"
    >
      <ImExit className="text-xl" />
      <p>Keluar</p>
    </button>
  );
};

export default LogoutButtonComponent;
