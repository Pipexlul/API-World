import { useContext, useState, useEffect } from "react";
import { APIContext } from "../../contexts/appContexts";
import APIChooserButton from "./APIChooserButton";

const APIChooser = ({ mainData, apiData, selectedAPI, setSelectedAPI }) => {
  return (
    <ul className="mb-0 flex list-none flex-row flex-wrap gap-y-2 pt-3 pb-4">
      {mainData.length > 0 &&
        mainData.map((entry, index) => {
          return (
            <APIChooserButton
              key={index}
              apiName={entry.name}
              apiData={apiData}
              selected={selectedAPI.idx === index}
              clickHandler={setSelectedAPI}
              idx={index}
            />
          );
        })}
    </ul>
  );
};

export default APIChooser;
