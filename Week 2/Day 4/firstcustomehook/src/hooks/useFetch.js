import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;