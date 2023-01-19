import APITableBodyFIeld from "./APITableBodyFIeld";

const APITableBodyEntry = ({ headers, entry }) => {
  return (
    <tr className="fond-medium whitespace-wrap">
      {headers.map((header, idx) => (
        <APITableBodyFIeld key={idx} label={entry[header.jsonTag]} />
      ))}
    </tr>
  );
};

export default APITableBodyEntry;
