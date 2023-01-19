import { useContext } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";
import CleanFiltersButton from "../../Buttons/CleanFiltersButton";
import APIFilterInput from "./APIFilterInput";

const APIFilters = ({ headers }) => {
  const { filterInputs, dispatchFilterInputs } = useContext(APIHandlerContext);

  return (
    <div className="w-full rounded-xl bg-gray-600 bg-opacity-30 px-2 pb-4 sm:w-1/3">
      <h4 className="mb-3 text-center text-3xl font-semibold">Filtros:</h4>
      <div className="flex flex-col items-center">
        {headers.map((header, idx) => (
          <APIFilterInput
            key={idx}
            entry={header}
            idx={idx}
            dispatch={dispatchFilterInputs}
            filterInputs={filterInputs}
          />
        ))}

        <div className="flex flex-col gap-4 sm:flex-row">
          <CleanFiltersButton
            action={() => dispatchFilterInputs({ type: "RESET_INPUTS" })}
          />
        </div>
      </div>
    </div>
  );
};

export default APIFilters;
