const HowToUseSection = ({ sectionTitle, subsectionList }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
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
  );
};

export default HowToUseSection;
