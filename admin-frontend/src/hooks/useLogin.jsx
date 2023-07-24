import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/userSlice";

export const useLogin = () => {
  // Redux Setup

  const dispatch = useDispatch();

  // Variables

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(false);

    const response = await fetch(`${import.meta.env.VITE_API}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response) {
      // Validate
      if (json.email !== "admin") {
        return;
      }

      // Save user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // Update Redux User
      dispatch(loginAction(json));
    }
  };

  return { login, loading, error };
};
