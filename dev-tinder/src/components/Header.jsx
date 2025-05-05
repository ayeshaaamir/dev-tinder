import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../utils/redux/slices/authSlice";
import { User } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevTinder</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <User size={18} />
            <span>{user?.username}</span>
          </div>
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
