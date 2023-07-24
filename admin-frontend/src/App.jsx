import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./pages/Login";
import { login } from "./redux/userSlice";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(login(user));
    }
  }, []);

  return (
    <div className='font-inter w-full h-screen px-4 sm:px-12 md:px-24 lg:px-32'>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={!user ? <Login /> : <Navigate to={"/dashboard"} />}
          />
          <Route
            path='/dashboard'
            element={user ? <Dashboard /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
