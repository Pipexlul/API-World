import { useState, useEffect, useReducer } from "react";

import { APIHandlerContext } from "../contexts/appContexts";

import APIChooser from "./APIHandlerLogic/APIChooser";
import APIEndpoints from "./APIHandlerLogic/APIEndpoints";
import APIGeneralFilters from "./APIHandlerLogic/APIGeneralFilters";
import APIResults from "./APIHandlerLogic/APIResults";
import Separator from "./Separator";

const filterInputsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ALL": {
      const newState = [];

      for (let i = 0; i < action.payload.length; i++) {
        newState.push({
          fieldName: action.payload[i].jsonTag,
          value: "",
        });
      }

      return newState;
    }

    case "SET_INPUT": {
      const newState = structuredClone(state);
      newState[action.payload.idx].value = action.payload.value;

      return newState;
    }

    case "RESET_INPUTS": {
      const newState = structuredClone(state);
      newState.forEach((input) => (input.value = ""));

      return newState;
    }

    case "FULL_WIPE": {
      return [];
    }

    default:
      return state;
  }
};

const APIHandler = ({ mainData, apiData }) => {
  const [limitedResults, setLimitedResults] = useState(0);
  const [selectedAPI, setSelectedAPI] = useState({
    idx: -1,
    apiName: "",
    apiResultsField: "",
    apiContinueField: "",
  });
  const [canClick, setCanClick] = useState(true);
  const [endpoints, setEndpoints] = useState([]);
  const [endpointURL, setEndpointURL] = useState("");
  const [results, setResults] = useState(null);
  const [sort, setSort] = useState(null);

  const [filterInputs, dispatchFilterInputs] = useReducer(
    filterInputsReducer,
    []
  );

  useEffect(() => {
    setSort(null);
  }, [apiData]);

  useEffect(() => {
    if (selectedAPI.idx !== -1) {
      const apiBlock = apiData[selectedAPI.apiName];

      if (apiBlock) {
        setEndpoints(apiBlock.apiValues);
      }
    }
  }, [selectedAPI.idx]);

  useEffect(() => {
    if (!canClick) {
      const timer = setTimeout(() => {
        setCanClick(true);
      }, 1100);

      return () => clearTimeout(timer);
    }
  }, [canClick]);

  useEffect(() => {
    setSort(null);
    setResults(null);

    if (endpointURL) {
      console.log(endpoints);
      dispatchFilterInputs({
        type: "CREATE_ALL",
        payload: endpoints.find((endpoint) => endpoint.endpoint === endpointURL)
          .fields,
      });

      const urlCopy = endpointURL;

      const fetchResults = async (url) => {
        let finalResults = [];

        while (url) {
          console.log("Fetching", url);
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(
                `HTTP error! status: ${response.status} when fetching ${url}`
              );
            }
            const data = await response.json();
            console.log(data);

            finalResults = finalResults.concat(
              data[selectedAPI.apiResultsField]
            );

            if (selectedAPI.apiContinueField) {
              url = data[selectedAPI.apiContinueField];
            } else {
              url = null;
            }
          } catch (error) {
            throw error;
          }
        }

        return finalResults;
      };

      fetchResults(urlCopy).then(setResults).catch(console.error);
    }
  }, [endpointURL]);

  useEffect(() => {
    console.log("Results changed");
    console.log(results);
  }, [results]);

  return (
    <section className="m-4 rounded-3xl bg-gray-800 pb-6 text-gray-100 last:mb-0 md:m-8">
      <div className="flex flex-col flex-wrap p-6">
        <h2 className="mb-3 text-center text-5xl font-bold">
          Selecciona una API
        </h2>
        <APIChooser
          mainData={Object.values(mainData)}
          apiData={apiData}
          selectedAPI={selectedAPI}
          setSelectedAPI={setSelectedAPI}
        />
      </div>

      <APIGeneralFilters
        limitedResults={limitedResults}
        setLimitedResults={setLimitedResults}
      />

      <Separator
        fromColor="from-emerald-500/0"
        midColor="via-emerald-500"
        toColor="to-emerald-500/0"
      />

      <APIHandlerContext.Provider
        value={{
          canClick,
          sort,
          setSort,
          limitedResults,
          endpointURL,
          filterInputs,
          dispatchFilterInputs,
        }}
      >
        <APIEndpoints
          endpointData={endpoints}
          setCanClick={setCanClick}
          setEndpointURL={setEndpointURL}
        />

        <APIResults
          results={results}
          headers={
            endpoints.find((endpoint) => endpoint.endpoint === endpointURL)
              ?.fields
          }
        />
      </APIHandlerContext.Provider>
    </section>
  );
};

export default APIHandler;
