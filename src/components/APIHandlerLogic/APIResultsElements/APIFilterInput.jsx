import ShinyInput from "../../ShinyInput";

const APIFilterInput = ({ entry, dispatch, idx, filterInputs }) => {
  return (
    <div className="relative mb-5 overflow-hidden">
      <ShinyInput
        label={entry.name}
        type="text"
        labelColor="text-fuchsia-500"
        bgColor="bg-fuchsia-500"
        value={filterInputs[idx]?.value ?? ""}
        changeHandler={(text) =>
          dispatch({ type: "SET_INPUT", payload: { idx, value: text } })
        }
      />
    </div>
  );
};

export default APIFilterInput;
