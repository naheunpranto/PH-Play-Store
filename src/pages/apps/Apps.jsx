 
import AppCard from "../../components/AppCard";
import useAppsHooks from "../../hooks/useAppsHooks";

const Apps = () => {

  const {apps, loading} = useAppsHooks();

  console.log(apps, loading);

  return <div className="container mx-auto my-10">
    <div className="mb-8 text-center mt-8 w-[50%] mx-auto">
        <h2 className="font-bold text-4xl mb-5">All apps</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptatibus laboriosam odio, culpa ut sapiente unde id ea velit
          voluptatem!
        </p>
    </div>


    {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {apps.map((app, ind) => {
            return <AppCard key={ind} app={app} />;
          })}
        </div>
      )}
  </div>;
};

export default Apps;
