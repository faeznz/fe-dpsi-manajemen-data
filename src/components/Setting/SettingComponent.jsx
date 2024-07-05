import React, { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import {
  fetchUserProfile,
  updateUserProfile,
  changeUserPassword,
} from "../../controllers/userController";
import LottieLoading from "../Lottie/LottieLoading";

const SettingComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    email: "",
    employeeId: "",
  });
  const [loading, setLoading] = useState(true); // State loading
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false); // State for profile update loading
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false); // State for password update loading
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserProfile();
        setFormData({
          username: data.username,
          gender: data.jenisKelamin,
          email: data.email,
          employeeId: data.noKaryawan,
        });
      } catch (error) {
        console.error("Error fetching account data:", error);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    loadData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdatingProfile(true);
    try {
      await updateUserProfile({
        username: formData.username,
        email: formData.email,
      });
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    setIsUpdatingPassword(true);
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation password do not match");
      setIsUpdatingPassword(false);
      return;
    }

    try {
      await changeUserPassword({
        currentPassword,
        newPassword,
      });
      alert("Password updated successfully");
      setShowPasswordPopup(false);
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password");
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <div className="w-full">
      {loading ? (
        <LottieLoading />
      ) : (
        <div className="w-full">
          <div className="w-full flex flex-row justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center bg-[#397683] p-24 rounded-3xl">
              <IoPerson className="text-6xl text-white" />
            </div>
            <div className="w-3/5">
              <form
                className="flex flex-col gap-2 text-sm w-full"
                onSubmit={handleSubmit}
              >
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
                />
                <label>Jenis Kelamin</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  readOnly
                  className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
                />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
                />
                <label>No. Karyawan</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  readOnly
                  className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
                />
                <label>Password</label>
                <div className="flex flex-row gap-4 w-full">
                  <input
                    type="text"
                    name="employeeId"
                    value="********"
                    readOnly
                    className="w-3/5 bg-transparent h-8 border border-[#397683] rounded-lg px-2"
                  />
                  <button
                    type="button"
                    className="w-2/5 border-2 border-[#359DAC] text-[#359DAC] text-xs font-semibold h-8 rounded-lg"
                    onClick={() => setShowPasswordPopup(true)}
                  >
                    Change Password
                  </button>
                </div>
                <button
                  type="submit"
                  className={`text-white text-xs font-semibold h-8 rounded-lg mt-12 ${isUpdatingProfile ? 'bg-gray-400' : 'bg-[#359DAC]'}`}
                  disabled={isUpdatingProfile} // Disable button when updating profile
                >
                  {isUpdatingProfile ? "Proses..." : "PERBARUI"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showPasswordPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-16 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form
              className="flex flex-col gap-2"
              onSubmit={handlePasswordChangeSubmit}
            >
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
              />
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
              />
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="bg-transparent h-8 border border-[#397683] rounded-lg px-2"
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="bg-[#AA5656] w-1/2 text-white text-xs font-semibold h-8 rounded-lg"
                  onClick={() => setShowPasswordPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`w-1/2 text-white text-xs font-semibold h-8 rounded-lg ${isUpdatingPassword ? 'bg-gray-400' : 'bg-[#359DAC]'}`}
                  disabled={isUpdatingPassword} // Disable button when updating password
                >
                  {isUpdatingPassword ? "Proses..." : "Change Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingComponent;
