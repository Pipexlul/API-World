import { useState, useEffect } from "react";

import { APIHandlerContext } from "../contexts/appContexts";

import APIChooser from "./APIHandlerLogic/APIChooser";
import APIEndpoints from "./APIHandlerLogic/APIEndpoints";
import APIGeneralFilters from "./APIHandlerLogic/APIGeneralFilters";
import APIResults from "./APIHandlerLogic/APIResults";
import Separator from "./Separator";

const APIHandler = ({ mainData, apiData }) => {
  const [limitedResults, setLimitedResults] = useState(0);
  const [selectedAPI, setSelectedAPI] = useState({ idx: -1, apiName: "" });
  const [canClick, setCanClick] = useState(true);
  const [endpoints, setEndpoints] = useState([]);
  const [endpointURL, setEndpointURL] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (selectedAPI.idx !== -1) {
      const apiBlock = apiData[selectedAPI.apiName];

      if (apiBlock) {
        setEndpoints(apiBlock);
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
    if (endpointURL) {
      console.log("Fetching", endpointURL);
      const fetchResults = async () => {
        try {
          const response = await fetch(endpointURL);
          console.log(response);
          const data = await response.json();
          console.log(data);

          setResults(data.results);
        } catch (error) {
          console.error(error);
        }
      };

      fetchResults();
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
          apiData={Object.values(mainData)}
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

      <APIHandlerContext.Provider value={{ canClick }}>
        <APIEndpoints
          endpointData={endpoints}
          setCanClick={setCanClick}
          setEndpointURL={setEndpointURL}
        />

        <APIResults results={results} />
      </APIHandlerContext.Provider>
    </section>
  );
};

export default APIHandler;
