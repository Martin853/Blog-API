import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export const useSignup = () => {
  // Redux Setup

  const dispatch = useDispatch();

  // Variables

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const signup = async (email, password) => {
    setLoading(true);
    setError(false);

    const response = await fetch(
      `${import.meta.env.VITE_API}/api/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response) {
      // Save user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // Update Redux User
      dispatch(login(json));
    }
  };

  return { signup, loading, error };
};
