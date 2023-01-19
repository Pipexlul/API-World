import { useContext } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";
import APITableBodyEntry from "./APITableBodyEntry";

const APITableBody = ({ headers, results }) => {
  const { sort, limitedResults, filterInputs, isLoading } =
    useContext(APIHandlerContext);

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

  const filterResults = (results) => {
    if (filterInputs) {
      const filterData = filterInputs.filter((filterObj) => {
        return filterObj.value.trim() !== "";
      });

      const resultsCopy = structuredClone(results);

      return resultsCopy.filter((result) => {
        return filterData.every((filterObj) => {
          return result[filterObj.fieldName]
            .toLowerCase()
            .includes(filterObj.value.toLowerCase());
        });
      });
    }

    return results;
  };

  return (
    <tbody className="divide-y divide-gray-200 text-white">
      {!isLoading &&
        results &&
        sortResults(filterResults(results)).map((result, idx) => (
          <APITableBodyEntry key={idx} headers={headers} entry={result} />
        ))}
    </tbody>
  );
};

export default APITableBody;
