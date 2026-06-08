import { use, useEffect, useState } from "react";
import AppCard from "./AppCard";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then(res => res.json());

const TrandingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps, "apps");

  // const data = useLoaderData();
  // console.log(data, "data from homepage");

  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
    };
    fetchData();
  }, []);

  console.log(apps, "apps");

  return (
    <div className="container mx-auto my-[60px]">
      <div className="mb-8 text-center mt-8">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptatibus laboriosam odio, culpa ut sapiente unde id ea velit
          voluptatem!
        </p>
      </div>
      Total apps: {apps.length}
      <div className="grid grid-cols-3 gap-5">
        {apps.map((app, ind) => {
          return (
            <AppCard key={ind} app = {app}/>
          );
        })}
      </div>
    </div>
  );
};

export default TrandingApps;
