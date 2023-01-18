import { useState } from "react";

import APIChooser from "./APIHandlerLogic/APIChooser";
import Separator from "./Separator";
import ShinyInput from "./ShinyInput";

const APIHandler = () => {
  const [limitedResults, setLimitedResults] = useState(0);

  return (
    <section className="m-4 rounded-3xl bg-gray-800 pb-6 text-gray-100 last:mb-0 md:m-8">
      <div className="flex flex-col flex-wrap p-6">
        <h2 className="mb-3 text-center text-5xl font-bold">
          Selecciona una API
        </h2>
        <APIChooser />
      </div>

      {/*General Filters section*/}
      <div className="flex place-content-center items-center">
        <div className="relative mb-5 overflow-hidden">
          <ShinyInput
            label="Limite de resultados"
            type="number"
            bgColor="bg-emerald-500"
            labelColor="text-emerald-500"
            changeHandler={setLimitedResults}
            value={limitedResults}
          />
        </div>
      </div>

      <Separator
        fromColor="from-emerald-500/0"
        midColor="via-emerald-500"
        toColor="to-emerald-500/0"
      />

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
                  <td className="whitespace-nowrap px-4 py-2 font-medium">4</td>
                  <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                  <td className="whitespace-nowrap px-4 py-2">George Lucas</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    Gary Kurtz, Rick McCallum
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">4</td>
                  <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                  <td className="whitespace-nowrap px-4 py-2">George Lucas</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    Gary Kurtz, Rick McCallum
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">4</td>
                  <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                  <td className="whitespace-nowrap px-4 py-2">George Lucas</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    Gary Kurtz, Rick McCallum
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
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
  );
};

export default APIHandler;
