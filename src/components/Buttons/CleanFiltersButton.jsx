const CleanFiltersButton = ({ action }) => {
  return (
    <button
      className="rounded bg-red-700 px-4 py-2 font-semibold hover:bg-gradient-to-bl hover:from-red-700 hover:to-red-500"
      onClick={(e) => action()}
    >
      Limpiar Filtros
    </button>
  );
};

export default CleanFiltersButton;
