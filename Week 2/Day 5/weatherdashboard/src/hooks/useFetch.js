import { useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}