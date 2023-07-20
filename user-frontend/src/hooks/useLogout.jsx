import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const logoutAction = logout;

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch(logoutAction());
  };

  return { logout };
};
