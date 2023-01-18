import HowToUseRouteElement from "./HowToUseRouteElement";

const HowToUseRoute = ({ routesList }) => {
  return (
    <nav className="flex justify-center">
      <ol className="flex overflow-hidden rounded-lg border border-gray-700 text-gray-400">
        {routesList.map((route, index) => (
          <HowToUseRouteElement key={index} label={route} />
        ))}
      </ol>
    </nav>
  );
};

export default HowToUseRoute;
