import { useEffect, useReducer, useState } from "react";

import FeaturesList from "./components/FeaturesList";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";

import { APIContext } from "./contexts/appContexts";

import { apiData } from "./data/main.js";

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

function App() {
  const [loadedData, setLoadedData] = useState("NULL");
  const [apiState, apiDispatch] = useReducer(appReducer, {});

  useEffect(() => {
    const initialData = initialAppState();

    initialData.main = apiData;

    const mainValues = Object.values(initialData.main);

    Object.entries(featureData).forEach(([key, value]) => {
      const fileName = key
        .replace("./data/FeatureList/", "")
        .replace(".js", "");

      const mainBlock = mainValues.find((item) => item.internal === fileName);
      if (mainBlock && mainBlock.enabled) {
        initialData.features.push(value);
      }
    });

    Object.entries(individualApiData).forEach(([key, value]) => {
      const fileName = key.replace("./data/APIData/", "").replace(".js", "");

      const mainBlock = mainValues.find((item) => item.internal === fileName);

      if (mainBlock && mainBlock.enabled) {
        if (!initialData.apidata[fileName]) {
          initialData.apidata[fileName] = [];
        }

        value.forEach((item) => {
          if (item.enabled) {
            initialData.apidata[fileName].push(item);
          }
        });
      }
    });

    Object.entries(howToUseData).forEach(([key, value]) => {
      const fileName = key.replace("./data/HowToUse/", "").replace(".js", "");

      const mainBlock = mainValues.find((item) => item.internal === fileName);

      if (fileName === "General") {
        initialData.howtouse.push(value);
      } else if (
        mainBlock &&
        mainBlock.enabled &&
        initialData.apidata[fileName].length > 0
      ) {
        const dataCopy = structuredClone(value);

        initialData.apidata[fileName].forEach((item) => {
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

    if (initialData.howtouse.length > 0) {
      initialData.howtouse.sort((a, b) => {
        if (a.sectionName === "General") {
          return -1;
        }

        if (b.sectionName === "General") {
          return 1;
        }

        return a.sectionName.localeCompare(b.sectionName);
      });
    }

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
      <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-emerald-900 pb-6">
        <Header />
        <FeaturesList features={apiState.features} />
        <HowToUse howToUseData={apiState.howtouse} />

        <section className="m-4 rounded-3xl bg-gray-800 pb-6 text-gray-100 last:mb-0 md:m-8">
          <div className="flex flex-col flex-wrap p-6">
            <h2 className="mb-3 text-center text-5xl font-bold">
              Selecciona una API
            </h2>
            <ul className="mb-0 flex list-none flex-row flex-wrap gap-y-2 pt-3 pb-4">
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded bg-emerald-600 px-5 py-3 text-sm font-bold uppercase leading-normal text-white shadow-lg"
                  }
                >
                  Star Wars
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded bg-gray-700 px-5 py-3 text-sm font-bold uppercase leading-normal text-emerald-600 shadow-lg"
                  }
                >
                  Pokemon
                </a>
              </li>
              <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                <a
                  className={
                    "block rounded bg-gray-700 px-5 py-3 text-sm font-bold uppercase leading-normal text-emerald-600 shadow-lg"
                  }
                >
                  Rick and Morty
                </a>
              </li>
            </ul>
          </div>

          <div className="flex place-content-center items-center">
            <div className="relative mb-5 overflow-hidden">
              <label className="text-xs font-semibold uppercase text-emerald-500">
                Limite de resultados
              </label>
              <div>
                <input
                  type="number"
                  className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
                />
                <span
                  className={`absolute bottom-0 left-0 h-2 transform bg-emerald-500 transition-all duration-300 ease-in ${
                    1 === 1 ? "w-7/12" : "w-0"
                  }`}
                />
                <span
                  className={`absolute bottom-0 right-0 h-2 transform bg-emerald-500 transition-all duration-300 ease-in ${
                    1 === 1 ? "w-7/12" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto h-4 w-5/6 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>

          <div className="mb-4 flex flex-wrap place-content-center justify-evenly gap-y-2 p-6">
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Peliculas
              </span>
            </a>
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Personajes
              </span>
            </a>
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Planetas
              </span>
            </a>
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Especies
              </span>
            </a>
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Naves
              </span>
            </a>
            <a className="group relative inline-block overflow-hidden rounded-full border-2 border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
              <span className="text-md relative font-medium text-fuchsia-600 transition-colors group-hover:text-white">
                Vehiculos
              </span>
            </a>
          </div>

          <div>
            <h3 className="mb-3 text-center text-4xl font-bold">Resultados:</h3>
            <div className="space-y-4 px-6 sm:flex sm:gap-x-3 sm:space-y-0">
              <div className="w-full overflow-hidden overflow-x-auto rounded-lg border border-gray-700 text-white">
                <table className="min-w-full divide-y divide-gray-700 text-sm">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
                        <div className="flex items-center gap-2">
                          Episodio
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-200"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
                        <div className="flex items-center gap-2">
                          Titulo
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-200"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
                        <div className="flex items-center gap-2">
                          Director
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-200"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
                        <div className="flex items-center gap-2">
                          Productor(es)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-200"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium">
                        Fecha de estreno
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 text-white">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        4
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        A New Hope
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        George Lucas
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        Gary Kurtz, Rick McCallum
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        1977-05-25
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        4
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        A New Hope
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        George Lucas
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        Gary Kurtz, Rick McCallum
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        1977-05-25
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        4
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        A New Hope
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        George Lucas
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        Gary Kurtz, Rick McCallum
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        1977-05-25
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full rounded-xl bg-gray-600 bg-opacity-30 px-2 pb-4 sm:w-1/3">
                <h4 className="mb-3 text-center text-3xl font-semibold">
                  Filtros:
                </h4>
                <div className="flex flex-col items-center">
                  <div className="relative mb-5 overflow-hidden">
                    <label className="peer text-sm font-semibold uppercase text-fuchsia-500">
                      Titulo
                    </label>
                    <div className="peer-focus:group">
                      <input
                        type="number"
                        className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="relative mb-5 overflow-hidden">
                    <label className="text-sm font-semibold uppercase text-fuchsia-500">
                      Episodio
                    </label>
                    <div>
                      <input
                        type="number"
                        className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="relative mb-5 overflow-hidden">
                    <label className="text-sm font-semibold uppercase text-fuchsia-500">
                      Director
                    </label>
                    <div>
                      <input
                        type="number"
                        className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="relative mb-5 overflow-hidden">
                    <label className="text-sm font-semibold uppercase text-fuchsia-500">
                      Productor
                    </label>
                    <div>
                      <input
                        type="number"
                        className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 h-2 transform bg-fuchsia-500 transition-all duration-300 ease-in ${
                          1 === 1 ? "w-7/12" : "w-0"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button className="rounded bg-blue-700 px-4 py-2 font-semibold hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500">
                      Filtrar
                    </button>
                    <button className="rounded bg-red-700 px-4 py-2 font-semibold hover:bg-gradient-to-bl hover:from-red-700 hover:to-red-500">
                      Limpiar Filtros
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </APIContext.Provider>
  ) : null;
}

export default App;
