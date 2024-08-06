import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(`Fetch response: ${res.status} ${res.statusText}`);
          if (!res.ok) {
            throw Error(`Could not fetch the data from that resource. Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setError(err.message);
            console.error("Fetch error:", err);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
