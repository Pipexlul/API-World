import { useEffect } from "react";
import HowToUseDefault from "./HowToUseDefault";
import HowToUseDisplayText from "./HowToUseDisplayText";

const HowToUse = () => {
  let infoData = {};

  return (
    <section className="m-4 flex flex-col rounded-3xl bg-gray-800 text-gray-100 sm:flex-row md:m-8">
      <aside className="w-full bg-emerald-900 p-6 sm:w-60">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              General
            </h2>
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
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
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Star Wars
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Informacion a buscar
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Pokemon
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Informacion a buscar
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
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
        {true ? <HowToUseDisplayText /> : <HowToUseDefault />}
      </article>
    </section>
  );
};

export default HowToUse;
