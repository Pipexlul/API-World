import FeaturesList from "./components/FeaturesList";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";

const featureList = [
  {
    title: "Star Wars",
    description: "¿Fanatico de alguna trilogía?",
    url: "https://swapi.dev/",
    iconColor: "text-violet-400",
  },
  {
    title: "Pokemon",
    description: "¡Atrapalos todos!",
    url: "https://pokeapi.co/",
    iconColor: "text-violet-400",
  },
  {
    title: "Rick and Morty",
    description: "Soy API Rick, Morty. ¡API Rick!",
    url: "https://rickandmortyapi.com/",
    iconColor: "text-violet-400",
  },
];

function App() {
  return (
    <div className="bg-gradient-to-br from-cyan-200 to-emerald-900 min-h-screen pb-6">
      <Header />
      <FeaturesList features={featureList} />
      <HowToUse />

      <section className="m-4 md:m-8 last:mb-0 bg-gray-800 text-gray-100 rounded-3xl pb-6">
        <div className="flex flex-wrap flex-col p-6">
          <h2 className="text-5xl font-bold text-center mb-3">
            Selecciona una API
          </h2>
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-y-2">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-emerald-600"
                }
              >
                Star Wars
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-emerald-600 bg-gray-700"
                }
              >
                Pokemon
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-emerald-600 bg-gray-700"
                }
              >
                Rick and Morty
              </a>
            </li>
          </ul>
        </div>

        <div className="flex place-content-center items-center">
          <div className="mb-5 relative overflow-hidden">
            <label className="text-xs text-emerald-500 font-semibold uppercase">
              Limite de resultados
            </label>
            <div>
              <input
                type="number"
                className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 text-black"
              />
              <span
                className={`absolute bottom-0 left-0 h-2 bg-emerald-500 transition-all duration-300 ease-in transform ${
                  1 === 1 ? "w-7/12" : "w-0"
                }`}
              />
              <span
                className={`absolute bottom-0 right-0 h-2 bg-emerald-500 transition-all duration-300 ease-in transform ${
                  1 === 1 ? "w-7/12" : "w-0"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-5/6 h-4 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>

        <div className="flex flex-wrap place-content-center p-6 justify-evenly gap-y-2 mb-4">
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Peliculas
            </span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Personajes
            </span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Planetas
            </span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Especies
            </span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Naves
            </span>
          </a>
          <a className="group relative inline-block overflow-hidden border-2 rounded-full border-fuchsia-600 px-8 py-3 focus:outline-none focus:ring">
            <span className="absolute inset-y-0 left-0 w-0 bg-fuchsia-600 transition-all group-hover:w-full group-active:bg-fuchsia-500"></span>
            <span className="relative text-md font-medium text-fuchsia-600 transition-colors group-hover:text-white">
              Vehiculos
            </span>
          </a>
        </div>

        <div>
          <h3 className="text-center text-4xl font-bold mb-3">Resultados:</h3>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-x-3 px-6">
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-700 text-white w-full">
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
                    <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      George Lucas
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Gary Kurtz, Rick McCallum
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      4
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      George Lucas
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Gary Kurtz, Rick McCallum
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      4
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">A New Hope</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      George Lucas
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      Gary Kurtz, Rick McCallum
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">1977-05-25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full bg-gray-600 bg-opacity-30 sm:w-1/3 rounded-xl pb-4 px-2">
              <h4 className="text-center text-3xl font-semibold mb-3">
                Filtros:
              </h4>
              <div className="flex flex-col items-center">
                <div className="mb-5 relative overflow-hidden">
                  <label className="text-sm text-fuchsia-500 font-semibold uppercase peer">
                    Titulo
                  </label>
                  <div className="peer-focus:group">
                    <input
                      type="number"
                      className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 text-black"
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 right-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-5 relative overflow-hidden">
                  <label className="text-sm text-fuchsia-500 font-semibold uppercase">
                    Episodio
                  </label>
                  <div>
                    <input
                      type="number"
                      className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 text-black"
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 right-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-5 relative overflow-hidden">
                  <label className="text-sm text-fuchsia-500 font-semibold uppercase">
                    Director
                  </label>
                  <div>
                    <input
                      type="number"
                      className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 text-black"
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 right-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-5 relative overflow-hidden">
                  <label className="text-sm text-fuchsia-500 font-semibold uppercase">
                    Productor
                  </label>
                  <div>
                    <input
                      type="number"
                      className="form-input max-w-md border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 text-black"
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 right-0 h-2 bg-fuchsia-500 transition-all duration-300 ease-in transform ${
                        1 === 1 ? "w-7/12" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-700 rounded px-4 py-2 font-semibold hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500">
                    Filtrar
                  </button>
                  <button className="bg-red-700 rounded px-4 py-2 font-semibold hover:bg-gradient-to-bl hover:from-red-700 hover:to-red-500">
                    Limpiar Filtros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
