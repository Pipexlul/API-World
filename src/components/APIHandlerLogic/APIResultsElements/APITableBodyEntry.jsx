import APITableBodyFIeld from "./APITableBodyFIeld";

const getLabel = (header, field) => {
  if (field === null || field === undefined) {
    return "";
  }

  if (!header.containerData) {
    return field;
  }

  const temp = header.containerData(field);
  if (Array.isArray(temp)) {
    return temp.join(", ");
  }

  return temp;
};

const APITableBodyEntry = ({ headers, entry }) => {
  return (
    <tr className="fond-medium whitespace-wrap">
      {headers.map((header, idx) => (
        <APITableBodyFIeld
          key={idx}
          label={getLabel(header, entry[header.jsonTag])}
        />
      ))}
    </tr>
  );
};

export default APITableBodyEntry;
