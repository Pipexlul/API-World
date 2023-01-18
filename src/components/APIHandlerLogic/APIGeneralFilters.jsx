import ShinyInput from "../ShinyInput";

const APIGeneralFilters = ({ limitedResults, setLimitedResults }) => {
  return (
    <div className="flex place-content-center items-center">
      <div className="relative mb-5 overflow-hidden">
        <ShinyInput
          label="Limite de resultados"
          type="number"
          bgColor="bg-emerald-500"
          labelColor="text-emerald-500"
          changeHandler={setLimitedResults}
          value={limitedResults}
        />
      </div>
    </div>
  );
};

export default APIGeneralFilters;
