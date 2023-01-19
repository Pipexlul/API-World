import { useContext, useState, useEffect } from "react";
import { APIContext } from "../../contexts/appContexts";
import APIChooserButton from "./APIChooserButton";

const APIChooser = ({ apiData, selectedAPI, setSelectedAPI }) => {
  return (
    <ul className="mb-0 flex list-none flex-row flex-wrap gap-y-2 pt-3 pb-4">
      {Object.values(apiData)
        .sort((a, b) => {
          return a.apiName.localeCompare(b.apiName);
        })
        .map((entry, index) => {
          return (
            <APIChooserButton
              key={index}
              apiName={entry.apiName}
              apiData={entry}
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
