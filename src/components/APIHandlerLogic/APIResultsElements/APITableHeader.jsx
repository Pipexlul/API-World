import APITableHeaderField from "./APITableHeaderField";

const APITableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-900">
      <tr>
        {headers.map((header, idx) => (
          <APITableHeaderField key={idx} headerFieldData={header} />
        ))}
      </tr>
    </thead>
  );
};

export default APITableHeader;
