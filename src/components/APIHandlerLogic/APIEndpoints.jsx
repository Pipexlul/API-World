import APIEndpointButton from "./APIEndpointButton";

const APIEndpoints = ({ endpointData, setCanClick }) => {
  return (
    <div className="mb-4 flex flex-wrap place-content-center justify-evenly gap-y-2 p-6">
      {endpointData.length > 0 &&
        endpointData.map((endpoint, index) => {
          return (
            <APIEndpointButton
              key={index}
              label={endpoint.name}
              endpointURL={endpoint.endpoint}
              setCanClick={setCanClick}
            />
          );
        })}
    </div>
  );
};

export default APIEndpoints;
