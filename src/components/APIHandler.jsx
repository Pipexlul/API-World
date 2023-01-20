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
      const newState = [];
      for (const inputData of state) {
        newState.push({ fieldName: inputData.fieldName, value: "" });
      }

      return newState;
    }

    case "FULL_WIPE": {
      return [];
    }

    default:
      return state;
  }
};

const APIHandler = ({ apiData }) => {
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
  const [isLoading, setIsLoading] = useState(false);
  // const [retrigger, setRetrigger] = useState("");

  const [filterInputs, dispatchFilterInputs] = useReducer(
    filterInputsReducer,
    []
  );

  const getResults = (urlParam) => {
    const realEndpointURL = urlParam;

    const endpointData = endpoints.find(
      (endpoint) => endpoint.endpoint === realEndpointURL
    );

    if (!endpointData) {
      return;
    }

    setSort(null);
    setResults(null);
    setIsLoading(true);
    console.log(endpoints);
    dispatchFilterInputs({
      type: "CREATE_ALL",
      payload: endpointData.fields,
    });

    const fetchResults = async (url) => {
      let finalResults = [];
      const randomData = {
        max: -1,
        usedIndexes: [],
      };

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

          if (endpointData.isRandom) {
            if (randomData.max === -1) {
              randomData.max = data[endpointData.randomField];

              if (!randomData.max) {
                throw new Error(
                  `The random field ${endpointData.randomField} is not a number or does not exist`
                );
              }
            }

            const response = await fetch(
              realEndpointURL + endpointData.randomQuery + randomData.max
            );
            if (!response.ok) {
              throw new Error(
                `HTTP error! status: ${response.status} when fetching ${url}`
              );
            }

            let allElements = await response.json();
            allElements = allElements[selectedAPI.apiResultsField];

            while (
              randomData.usedIndexes.length <
              Math.min(endpointData.randomEntries, randomData.max)
            ) {
              let randomIndex = Math.floor(Math.random() * randomData.max);

              while (randomData.usedIndexes.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * randomData.max);
              }

              const response = await fetch(allElements[randomIndex].url);
              if (!response.ok) {
                throw new Error(
                  `HTTP error! status: ${response.status} when fetching ${url}`
                );
              }

              const data = await response.json();
              console.log(data);

              finalResults = finalResults.concat(data);
              randomData.usedIndexes.push(randomIndex);
            }

            url = null;
          } else {
            finalResults = finalResults.concat(
              data[selectedAPI.apiResultsField]
            );

            if (selectedAPI.apiContinueField) {
              url = data[selectedAPI.apiContinueField];
            } else {
              url = null;
            }
          }
        } catch (error) {
          throw error;
        }
      }

      return finalResults;
    };

    fetchResults(realEndpointURL)
      .then(setResults)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

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
          filterInputs,
          dispatchFilterInputs,
          isLoading,
          getResults,
          endpointURL,
          setEndpointURL,
        }}
      >
        <APIEndpoints endpointData={endpoints} setCanClick={setCanClick} />

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
