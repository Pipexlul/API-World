import { useEffect, useReducer, useState } from "react";

import FeaturesList from "./components/FeaturesList";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";
import APIHandler from "./components/APIHandler";

import { APIContext } from "./contexts/appContexts";

import { apiData } from "./data/main.js";
import Footer from "./components/Footer";

const featureData = import.meta.glob("./data/FeatureList/*.js", {
  eager: true,
  import: "data",
});

const howToUseData = import.meta.glob("./data/HowToUse/*.js", {
  eager: true,
  import: "data",
});

const individualApiData = import.meta.glob("./data/APIData/*.js", {
  eager: true,
  import: "data",
});

const initialAppState = () => ({
  main: {},
  features: [],
  howtouse: [],
  apidata: {},
});

const appReducer = (state, action) => {
  if (action.type == "INIT_SET") {
    return action.payload;
  }

  if (action.type.startsWith("SET_")) {
    const type = action.type.replace("SET_", "").toLowerCase();

    if (state[type]) {
      return {
        ...state,
        [type]: action.payload,
      };
    }
  }

  if (action.type.startsWith("ADD_")) {
    const type = action.type.replace("ADD_", "").toLowerCase();

    if (state[type]) {
      return {
        ...state,
        [type]: { ...state[type], ...action.payload },
      };
    }
  }

  return state;
};

const dataSorter = (property, a, b) => {
  const aData = a[1];
  const bData = b[1];

  return aData[property].localeCompare(bData[property]);
};

function App() {
  const [loadedData, setLoadedData] = useState("NULL");
  const [apiState, apiDispatch] = useReducer(appReducer, {});

  useEffect(() => {
    const initialData = initialAppState();
    const validMain = {};

    for (const [key, value] of Object.entries(apiData)) {
      if (value.enabled) {
        validMain[key] = value;
      }
    }

    initialData.main = validMain;

    const mainValues = Object.values(initialData.main);

    Object.entries(featureData)
      .sort((a, b) => {
        return dataSorter("title", a, b);
      })
      .forEach(([key, value]) => {
        const fileName = key
          .replace("./data/FeatureList/", "")
          .replace(".js", "");

        const mainBlock = mainValues.find((item) => item.internal === fileName);
        if (mainBlock) {
          initialData.features.push(value);
        }
      });

    Object.entries(individualApiData)
      .sort((a, b) => {
        return dataSorter("apiName", a, b);
      })
      .forEach(([key, value]) => {
        const fileName = key.replace("./data/APIData/", "").replace(".js", "");

        const mainBlock = mainValues.find((item) => item.internal === fileName);

        if (mainBlock) {
          const finalApiValues = [];

          const finalApiData = {
            resultsField: value.resultsField,
            continueField: value.continueField,
            apiValues: finalApiValues,
            apiName: value.apiName,
          };

          if (!initialData.apidata[value.apiName]) {
            initialData.apidata[value.apiName] = finalApiData;
          }

          // if (!initialData.apidata[fileName]) {
          //   initialData.apidata[fileName] = finalApiData;
          // }

          value.endpoints.forEach((item) => {
            if (item.enabled) {
              finalApiValues.push(item);
            }
          });
        }
      });

    Object.entries(howToUseData)
      .sort((a, b) => {
        const key = "sectionName";

        if (a[1][key] === "General") {
          return -1;
        } else if (b[1][key] === "General") {
          return 1;
        } else {
          return dataSorter(key, a, b);
        }
      })
      .forEach(([key, value]) => {
        const fileName = key.replace("./data/HowToUse/", "").replace(".js", "");

        const mainBlock = mainValues.find((item) => item.internal === fileName);

        if (fileName === "General") {
          initialData.howtouse.push(value);
        } else if (
          mainBlock &&
          initialData.apidata[mainBlock.name].apiValues.length > 0
        ) {
          const dataCopy = structuredClone(value);

          initialData.apidata[mainBlock.name].apiValues.forEach((item) => {
            if (item.enabled) {
              const fieldsObjects = item.fields.map((field) => {
                return {
                  main: field.name,
                  hint: field.desc,
                };
              });

              dataCopy.subSections.push({
                title: item.name,
                helperTexts: fieldsObjects,
              });
            }
          });

          initialData.howtouse.push(dataCopy);
        }
      });

    apiDispatch({ type: "INIT_SET", payload: initialData });
    setLoadedData("INITIAL_SETUP");
  }, []);

  useEffect(() => {
    if (loadedData === "INITIAL_SETUP") {
      console.log(apiState.main);
      setLoadedData("FULLY_LOADED");
    }
  }, [loadedData]);

  return loadedData === "FULLY_LOADED" ? (
    <APIContext.Provider value={apiState}>
      <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-emerald-900">
        <Header />
        <FeaturesList features={apiState.features} />
        <HowToUse howToUseData={apiState.howtouse} />
        <APIHandler apiData={apiState.apidata} />
        <Footer />
      </div>
    </APIContext.Provider>
  ) : null;
}

export default App;
