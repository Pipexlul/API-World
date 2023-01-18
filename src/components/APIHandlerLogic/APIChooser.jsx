import { useContext, useState, useEffect } from "react";
import { APIContext } from "../../contexts/appContexts";
import APIChooserButton from "./APIChooserButton";

const APIChooser = () => {
  const { main } = useContext(APIContext);
  const [apiData, setApiData] = useState({});
  const [selectedAPI, setSelectedAPI] = useState(-1);

  useEffect(() => {
    const mainValues = Object.values(main);
    const results = mainValues.filter((entry) => entry.enabled);

    setApiData(results);
  }, []);

  return (
    <ul className="mb-0 flex list-none flex-row flex-wrap gap-y-2 pt-3 pb-4">
      {apiData.length > 0 &&
        apiData.map((entry, index) => {
          return (
            <APIChooserButton
              key={index}
              apiName={entry.name}
              selected={selectedAPI === index}
              clickHandler={setSelectedAPI}
              idx={index}
            />
          );
        })}
    </ul>
  );
};

export default APIChooser;
