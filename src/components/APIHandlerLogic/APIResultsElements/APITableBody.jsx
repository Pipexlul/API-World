import { useContext } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";
import APITableBodyEntry from "./APITableBodyEntry";

const APITableBody = ({ headers, results }) => {
  const { sort, limitedResults } = useContext(APIHandlerContext);

  const sortResults = (results) => {
    const numLimit = Number(limitedResults);
    const validLimit =
      !Number.isNaN(numLimit) && numLimit > 0 && Number.isInteger(numLimit)
        ? numLimit
        : 0;

    if (sort || validLimit) {
      let resultsCopy = structuredClone(results);

      if (sort) {
        const { sortObj, sortAscending, sortProperty } = sort;
        resultsCopy.sort((a, b) => {
          return sortObj[sortAscending ? "ascending" : "descending"](
            a[sortProperty],
            b[sortProperty]
          );
        });
      }

      if (validLimit) {
        resultsCopy = resultsCopy.slice(0, validLimit);
      }

      return resultsCopy;
    }

    return results;
  };

  return (
    <tbody className="divide-y divide-gray-200 text-white">
      {results &&
        sortResults(results).map((result, idx) => (
          <APITableBodyEntry key={idx} headers={headers} entry={result} />
        ))}
    </tbody>
  );
};

export default APITableBody;
