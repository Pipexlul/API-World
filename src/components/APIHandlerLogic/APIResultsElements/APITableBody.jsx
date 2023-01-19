import APITableBodyEntry from "./APITableBodyEntry";

const APITableBody = ({ headers, results }) => {
  return (
    <tbody className="divide-y divide-gray-200 text-white">
      {results &&
        results.map((result, idx) => (
          <APITableBodyEntry key={idx} headers={headers} entry={result} />
        ))}
    </tbody>
  );
};

export default APITableBody;
