import React from "react";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch(logoutAction());
  };

  return { logout };
};
