const APIChooserButton = ({
  apiName,
  apiData,
  selected,
  clickHandler,
  idx,
}) => {
  return (
    <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
      <a
        className={`block rounded px-5 py-3 text-sm font-bold uppercase leading-normal shadow-lg ${
          selected
            ? "bg-emerald-600 text-white"
            : "bg-gray-700 text-emerald-600"
        }`}
        onClick={(e) => {
          e.preventDefault();

          const { resultsField, continueField } = apiData[apiName];
          clickHandler({
            idx,
            apiName,
            apiResultsField: resultsField,
            apiContinueField: continueField,
          });
        }}
        href="#"
      >
        {apiName}
      </a>
    </li>
  );
};

export default APIChooserButton;
