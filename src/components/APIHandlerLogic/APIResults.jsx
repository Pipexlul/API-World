import APIFilters from "./APIResultsElements/APIFilters";
import APITable from "./APIResultsElements/APITable";

const APIResults = ({ results, headers }) => {
  return (
    headers &&
    headers.length > 0 && (
      <div>
        <h3 className="mb-3 text-center text-4xl font-bold">Resultados:</h3>
        <div className="space-y-4 px-6 sm:flex sm:gap-x-3 sm:space-y-0">
          <APITable headers={headers} results={results} />
          <APIFilters headers={headers} />
        </div>
      </div>
    )
  );
};

export default APIResults;
