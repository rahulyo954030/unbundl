import { useEffect, useState } from "react";
import axios from "axios";

export default function useContent(limit = 20) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: { _limit: limit },
      })
      .then((res) => {
        if (!mounted) return;
        setData(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Failed to load content");
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [limit]);

  return { data, loading, error };
}
