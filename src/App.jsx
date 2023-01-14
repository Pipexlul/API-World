function App() {
  return (
    <div className="bg-gradient-to-br from-cyan-200 to-emerald-900 min-h-screen pb-6">
      <section className="bg-gray-800 text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            API
            <span className="text-violet-400">World</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Bienvenido a APIWorld, donde podras llamar distintas APIs con
            tematicas variadas. Desde Pokemon, hasta Star Wars, pasando por Rick
            and Morty.
          </p>
          <p className="px-8 mb-4 text-lg">¡Todo desde un sólo lugar!</p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-400 text-gray-900 hover:bg-emerald-600">
              Empezar
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">
              ¿Cómo funciona?
            </button>
          </div>
        </div>
      </section>

      <section className="m-4 md:m-8 bg-gray-800 text-gray-100 rounded-3xl">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">APIs soportadas</h2>
          <p className="text-gray-400">Ocupa tu favorita</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Star Wars</h3>
            <div className="space-y-1 leading-tight">
              <p className="text-center">https://swapi.dev/</p>
              <p>¿Fanatico de alguna trilogía?</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Pokemon</h3>
            <div className="space-y-1 leading-tight">
              <p className="text-cener">https://pokeapi.co/</p>
              <p>¡Atrapalos todos!</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Rick and Morty</h3>
            <div className="space-y-1 leading-tight">
              <p className="text-center">https://rickandmortyapi.com/</p>
              <p>Soy API Rick, Morty. ¡API Rick!</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4"></div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Más proximamente...</h3>
          </div>
          <div className="flex flex-col items-center p-4"></div>
        </div>
      </section>

      <section className="m-4 md:m-8 bg-gray-800 text-gray-100 rounded-3xl flex flex-col sm:flex-row">
        <aside className="w-full p-6 sm:w-60 bg-emerald-900">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                General
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Seleccion
                </a>
                <a rel="noopener noreferrer" href="#">
                  Filtrar
                </a>
                <a rel="noopener noreferrer" href="#">
                  Ordenar
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                Star Wars
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Informacion a buscar
                </a>
                <a rel="noopener noreferrer" href="#">
                  Utility
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                Pokemon
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Informacion a buscar
                </a>
                <a rel="noopener noreferrer" href="#">
                  Utility
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
                Rick and Morty
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Informacion a buscar
                </a>
                <a rel="noopener noreferrer" href="#">
                  Utility
                </a>
              </div>
            </div>
          </nav>
        </aside>
        <article className="w-full p-6 text-center">
          <div className="flex flex-col justify-center h-full gap-y-8">
            <h2 className="text-5xl font-bold">¿Cómo usar APIWorld?</h2>
            <p className="text-lg">
              Haz click en la sección sobre la que deseas saber más
            </p>
          </div>
        </article>
      </section>

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
