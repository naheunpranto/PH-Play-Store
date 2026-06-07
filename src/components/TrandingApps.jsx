


const appsPromise = fetch("/data.json").then(res => res.json());


const TrandingApps = () => {

    const apps = appsPromise

  return (
    <div>
      <div className="mb-8 text-center mt-8">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptatibus laboriosam odio, culpa ut sapiente unde id ea velit
          voluptatem!
        </p>
      </div>
    </div>
  );
};

export default TrandingApps;
