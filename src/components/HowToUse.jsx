const HowToUse = () => {
  return (
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
  );
};

export default HowToUse;
