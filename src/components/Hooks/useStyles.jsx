import React from "react";

export const useStyles = (defaultStyles, newStyleData) => {
  const { replaceStyles, extraStyles } = newStyleData;
  const styles = replaceStyles
    ? extraStyles
    : defaultStyles + " " + extraStyles;
  return styles;
};
