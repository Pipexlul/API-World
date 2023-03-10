import { useContext } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";
import LoadingSpinner from "../../LoadingSpinner";
import APITableBody from "./APITableBody";
import APITableHeader from "./APITableHeader";

const APITable = ({ headers, results }) => {
  const { isLoading } = useContext(APIHandlerContext);

  return (
    <div className="w-full overflow-hidden overflow-x-auto rounded-lg border border-gray-700 text-white">
      {isLoading ? (
        <LoadingSpinner
          fillColor="fill-fuchsia-500"
          width="w-24"
          height="h-24"
        />
      ) : (
        <table className="min-w-full divide-y divide-gray-700 text-sm">
          <APITableHeader headers={headers} />
          <APITableBody headers={headers} results={results} />
        </table>
      )}
    </div>
  );
};

export default APITable;
