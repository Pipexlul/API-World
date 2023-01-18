import Feature from "./Feature";

const FeaturesList = ({ features }) => {
  return (
    <section className="m-4 rounded-3xl bg-gray-800 text-gray-100 md:m-8">
      <div className="container mx-auto my-6 space-y-2 p-4 text-center">
        <h2 className="text-5xl font-bold">APIs soportadas</h2>
        <p className="text-gray-400">Ocupa tu favorita</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, url, description, iconColor }) => (
          <Feature
            key={title}
            name={title}
            originalSite={url}
            decorationText={description}
            iconColor={iconColor}
          />
        ))}
      </div>
      <div className="flex flex-col items-center p-4">
        <h3 className="my-3 text-3xl font-semibold">Más proximamente...</h3>
      </div>
    </section>
  );
};

export default FeaturesList;
