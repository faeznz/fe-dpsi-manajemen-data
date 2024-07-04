import React from "react";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

const LogoutButtonComponent = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login'; 
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
