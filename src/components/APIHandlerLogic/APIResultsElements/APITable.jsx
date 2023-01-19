import APITableBody from "./APITableBody";
import APITableHeader from "./APITableHeader";

const APITable = ({ headers, results }) => {
  return (
    <div className="w-full overflow-hidden overflow-x-auto rounded-lg border border-gray-700 text-white">
      <table className="min-w-full divide-y divide-gray-700 text-sm">
        <APITableHeader headers={headers} />
        <APITableBody headers={headers} results={results} />
      </table>
    </div>
  );
};

export default APITable;
