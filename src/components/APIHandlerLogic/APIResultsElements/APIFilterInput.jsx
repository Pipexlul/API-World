import { useContext } from "react";
import { APIHandlerContext } from "../../../contexts/appContexts";
import ShinyInput from "../../ShinyInput";

const APIFilterInput = ({
  entry,
  dispatch,
  idx,
  filterInputs,
  blockFilter = false,
}) => {
  const { canClick, isLoading } = useContext(APIHandlerContext);

  return (
    <div className="relative mb-5 overflow-hidden">
      <ShinyInput
        disabled={!canClick || isLoading || blockFilter}
        label={entry.name}
        type="text"
        labelColor="text-fuchsia-500"
        bgColor="bg-fuchsia-500"
        value={filterInputs[idx]?.value ?? ""}
        changeHandler={(text) => {
          if (blockFilter) {
            return;
          }
          dispatch({ type: "SET_INPUT", payload: { idx, value: text } });
        }}
      />
    </div>
  );
};

export default APIFilterInput;
