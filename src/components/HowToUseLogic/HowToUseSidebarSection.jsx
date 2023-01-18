import HowToUseSidebarSectionEntry from "./HowToUseSidebarSectionEntry";

const HowToUseSidebarSection = ({ sectionName, entries }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        {sectionName}
      </h2>

      {entries && entries.length > 0 && (
        <div className="flex flex-col space-y-1">
          {entries.map((entry, index) => (
            <HowToUseSidebarSectionEntry
              key={index}
              subLabel={entry.title}
              sectionRoute={sectionName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HowToUseSidebarSection;
