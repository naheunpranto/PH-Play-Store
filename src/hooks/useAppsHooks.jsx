import { useEffect, useState } from "react";

const useAppsHooks = () => {
  const [apps, setApps] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return {apps, loading};
};

export default useAppsHooks;
