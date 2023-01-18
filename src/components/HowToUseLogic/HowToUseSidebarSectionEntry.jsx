import { useContext } from "react";
import { HowToUseContext } from "../../contexts/appContexts";

const HowToUseSidebarSectionEntry = ({ subLabel, sectionRoute }) => {
  const { setSelectedRoute } = useContext(HowToUseContext);

  return (
    <a
      rel="noopener noreferrer"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setSelectedRoute([sectionRoute, subLabel]);
      }}
    >
      {subLabel}
    </a>
  );
};

export default HowToUseSidebarSectionEntry;
