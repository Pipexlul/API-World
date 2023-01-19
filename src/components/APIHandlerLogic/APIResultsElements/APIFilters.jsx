const APIFilters = () => {
  return (
    <div className="w-full rounded-xl bg-gray-600 bg-opacity-30 px-2 pb-4 sm:w-1/3">
      <h4 className="mb-3 text-center text-3xl font-semibold">Filtros:</h4>
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
  );
};

export default APIFilters;
