import React, { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const signup = async (email, password) => {
    setLoading(true);
    setError(false);
  };
};
