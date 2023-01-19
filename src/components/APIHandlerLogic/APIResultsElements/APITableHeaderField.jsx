import { useContext, useState, useEffect } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";

const defaultSorter = {
  ascending: (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  },
  descending: (a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  },
};

const APITableHeaderField = ({ headerFieldData }) => {
  const [sortAscending, setSortAscending] = useState(true);

  const { setSort, endpointURL } = useContext(APIHandlerContext);

  useEffect(() => {
    setSortAscending(true);
  }, [endpointURL]);

  return (
    <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
      {headerFieldData.sortable ? (
        <div className="flex items-center gap-2">
          {headerFieldData.name}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSort({
                sortObj: headerFieldData.customSort ?? defaultSorter,
                sortAscending: !sortAscending,
                sortProperty: headerFieldData.jsonTag,
              });
              setSortAscending((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform text-gray-200 transition-transform duration-200 ${
                sortAscending ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      ) : (
        headerFieldData.name
      )}
    </th>
  );
};

export default APITableHeaderField;
