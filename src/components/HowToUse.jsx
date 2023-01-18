import { useEffect, useState } from "react";

import { HowToUseContext } from "../contexts/appContexts";

import HowToUseDefault from "./HowToUseLogic/HowToUseDefault";
import HowToUseDisplayText from "./HowToUseLogic/HowToUseDisplayText";
import HowToUseSidebarSection from "./HowToUseLogic/HowToUseSidebarSection";

const HowToUse = ({ howToUseData }) => {
  const [selectedEntryText, setSelectedEntryText] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState([]);

  useEffect(() => {
    if (selectedRoute.length > 0) {
      const [sectionName, entry] = selectedRoute; // Hardcoding this to two levels for now
      const sectionData = howToUseData.find(
        (section) => section.sectionName === sectionName
      );

      const entryData = sectionData?.subSections.find(
        (subSection) => subSection.title === entry
      );

      if (entryData) {
        setSelectedEntryText(entryData.helperTexts);
      }
    }
  }, [selectedRoute]);

  return (
    <HowToUseContext.Provider value={{ setSelectedRoute }}>
      <section className="m-4 flex flex-col rounded-3xl bg-gray-800 text-gray-100 sm:flex-row md:m-8">
        <aside className="w-full bg-emerald-900 p-6 sm:w-60">
          <nav className="space-y-8 text-sm">
            {howToUseData &&
              howToUseData.length > 0 &&
              howToUseData.map((section, index) => (
                <HowToUseSidebarSection
                  key={index}
                  sectionName={section.sectionName}
                  entries={section.subSections}
                />
              ))}
          </nav>
        </aside>
        <article className="w-full p-6 text-center">
          {selectedRoute.length > 0 ? (
            <HowToUseDisplayText
              routes={selectedRoute}
              entryText={selectedEntryText}
            />
          ) : (
            <HowToUseDefault />
          )}
        </article>
      </section>
    </HowToUseContext.Provider>
  );
};

export default HowToUse;
