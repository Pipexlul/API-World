const HowToUseDisplayTextInfo = ({ infoToShow }) => {
  return (
    <div className="space-y-4 divide-y-2 p-4">
      {infoToShow.map((entry, index) => {
        return (
          <div key={index}>
            <h3 className="mt-4 text-xl font-semibold">{entry.main}</h3>
            <p className="mt-2 hidden text-sm sm:block">{entry.hint}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HowToUseDisplayTextInfo;
